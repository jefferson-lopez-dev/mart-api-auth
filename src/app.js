import express from "express";
import cookieParser from "cookie-parser";
import routes, { rout1 } from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: {
      global,
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(rout1);

export default app;
