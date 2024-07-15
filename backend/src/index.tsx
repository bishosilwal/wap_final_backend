import  express from "express"
import allRoutes from "./post/allRoutes";
import errorHandler from "./errorHandler";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(allRoutes);

app.get("*", function (req, res) {
  res.status(404).json({ msg: "Opps!! Not found" });
});

app.use(errorHandler);

app.listen("3000", () => {
  console.log("server started");
});
