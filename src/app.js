import express from "express";
import cookieParser from "cookie-parser";
import routes, { rout1 } from "./routes/routes.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Reemplaza con tu URL de producción
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(rout1);

export default app;
