import { RequestHandler } from "express";
import postService from "../services/postService";

const indexHandler: RequestHandler = (req, res, next) => {
 postService
   .getAll()
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
