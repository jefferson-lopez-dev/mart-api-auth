import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes, { rout1 } from "./routes/routes.js";

const app = express();

const corsOptions = {
  origin: "https://mart-pos.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(rout1);

export default app;
