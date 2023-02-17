import { verify } from "jsonwebtoken";
import { appConfig } from "../config/config";

export const protectFunction = (authorization) => {
  const decode = verify(authorization, appConfig.secret);
  return "You are under protected data";
};
