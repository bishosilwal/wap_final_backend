import { RequestHandler } from "express";
import postService from "../services/postService";

const indexHandler: RequestHandler = (req, res, next) => {
  postService
    .getAll(req.query.current_date)
    .then((r) => {
      res.status(200).json({
        posts: r,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: "Failed!",
        msg: error.message,
      });
    });
}

export default indexHandler;
