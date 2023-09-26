import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";

const app = express();
const router = express.Router();

dotenv.config();

router.use(
  cors({
    credentials: true,
    origin: [],
  })
);

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(routes);

app.use("/api", router);

app.listen(3001, () => console.log("Server running at 3001."));