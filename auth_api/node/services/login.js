import User from "../models/user";

export const loginFunction = (username, password) => {
  return User.authenticate(username, password);
}
