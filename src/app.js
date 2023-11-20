import express from "express";
import cookieParser from "cookie-parser";
import routes, { rout1 } from "./routes/routes.js";

const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]); // Reemplaza con tu URL de producción
  res.append("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  // res.append("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.append("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(rout1);

export default app;
