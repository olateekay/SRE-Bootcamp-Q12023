import { protectFunction } from "../services/protected";

export const protect = (req, res, next) => {
  let authorization = req.headers.authorization;
  try {
    let response = {
      data: protectFunction(authorization.split(" ")[1]),
    };
    res.send(response);
    next();
  } catch (e) {
    return res.status(403).send();
  }
};