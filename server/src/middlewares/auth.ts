import jwt from "jsonwebtoken"
import { promisify } from "util"
import {Request, Response} from 'express'

export default async (req:Request, res:Response, next) => {
    console.log('teste')
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const {_id} = await promisify(jwt.verify)(token,"secret");

    req.userId = _id;

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Token invalid" });
  }
};