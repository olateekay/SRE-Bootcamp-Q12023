import { STRING, QueryTypes } from "sequelize";
import { sign } from "jsonwebtoken";
import { createHash } from "crypto";
import sequelize from "../services/database";
import { appConfig } from "../config/config";

const User = sequelize.define("users", {
  username: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  salt: {
    type: STRING,
  },
});

User.authenticate = async (username, password) => {
  const user = (
    await sequelize.query("SELECT * FROM users WHERE username = :username", {
      replacements: { username: username },
      type: QueryTypes.SELECT,
      mapToModel: true,
      model: this,
    })
  )[0];

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const hash = hashPassword(password, user.salt);

  if (hash !== user.password) {
    throw new Error("Invalid username or password");
  }

  const token = sign(
    {
      role: user.role,
    },
    appConfig.secret,
    { expiresIn: appConfig.tokenExpiry }
  );
  return token;
};

const hashPassword = (password, salt) => {
    return createHash("sha512")
    .update(password + salt)
    .digest("hex");
};

export default User;