import express from "express";
import cookieParser from "cookie-parser";
import routes, { rout1 } from "./routes/routes.js";
import cors from "cors";

const app = express();

const allowedOrigins = ["https://mart-pos.vercel.app", "http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(rout1);

export default app;
