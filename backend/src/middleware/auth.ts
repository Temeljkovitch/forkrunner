import { NextFunction, Request, Response } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

export const jwtParse = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    response.sendStatus(401);
    return;
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;

    const auth0Id = decoded.sub;

    const user = await User.findOne({ auth0Id });
    if (!user) {
      response.sendStatus(401);
      return;
    }

    request.auth0Id = auth0Id as string;
    request.userId = user._id.toString();
    next();
  } catch (error) {
    response.sendStatus(401);
  }
};
