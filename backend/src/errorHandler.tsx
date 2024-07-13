import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error.stack);
  res.status(500).json({
    'msg': error.message
  });
}

export default errorHandler;
