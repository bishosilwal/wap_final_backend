import { RequestHandler } from "express";

const indexHandler: RequestHandler = (req, res, next) => {
  res.status(200).json({
    msg: "hello"
  })
}

export default indexHandler;
