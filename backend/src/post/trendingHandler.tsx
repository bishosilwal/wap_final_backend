import { RequestHandler } from "express";
import postService from "../services/postService";

const trendingHandler: RequestHandler = (req, res, next) => {
  postService
    .getTrending()
    .then((result) => {
      res.status(200).json({
        msg: "Found successfully!",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: "Failed!",
        msg: error.message,
      });
    });
};

export default trendingHandler;
