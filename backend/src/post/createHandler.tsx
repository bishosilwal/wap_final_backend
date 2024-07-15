import { RequestHandler } from "express";
import postService from "../services/postService";


const createHandler: RequestHandler = (req, res, next) => {
  if (req.body.post) {
    postService
      .create({
        title: req.body.post.title,
        body: req.body.post.body,
      })
      .then((result) => {
        res.status(200).json({
          msg: "Created successfully!",
          data: { ...result },
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: "Failed!",
          msg: error.message,
        });
      });
  }


}

export default createHandler;
