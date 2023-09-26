import controllers from '../src/api/controllers';
import { Router } from "express";

const app = Router();

app.get("/staff", (req, res) => {
  res.send("Funcionou!!!");
});

export default app;