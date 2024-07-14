import { RequestHandler } from "express";
import postService from "../services/postService";


const updateHandler: RequestHandler = (req, res, next) => {
  postService
    .update({
      id: parseInt(req.params.id),
      votes: parseInt(req.body.votes)
    })
    .then((r) => {
      res.status(200).json({
        data: r,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: "Failed!",
        msg: error.message,
      });
    });
}

export default updateHandler;
