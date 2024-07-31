import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(bodyParser.json());

//routes import

import router from "./routes/chat.routes.js";
//Others.....

//routes declaration
app.use("/api/gemini", router);
// Add more if required

export default app;
