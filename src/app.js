import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";

const app = express();

app.use(
  cors({
    origin: {
      global,
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

export default app;
