import "dotenv/config";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import usersRouter from "./routes/users";

const app = express();
const port = process.env.PORT ?? 8080;

// middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/users", usersRouter);

app.use("/ping", (req, res) => {
  res.status(200).send({ success: true, data: "pong!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
