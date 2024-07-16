import { RequestHandler } from "express";
import postService from "../services/postService";

const getHandler: RequestHandler = (req, res, next) => {
  if (req.params.id) {
    postService
      .getById(parseInt(req.params.id))
      .then((result) => {
        res.status(200).json({
          msg: "Found successfully!",
          data: { ...result },
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: "Failed!",
          msg: error.message,
        });
      });
  } else {
    next(new Error("Id not given!"));
  }
};

export default getHandler;
