import { Router } from "express";
import { validateSchema } from "../middlewares/validated.js";
import { TokenRequired } from "../middlewares/validateToken.js";
import {
  validatedLogin,
  validatedRegister,
} from "../models/validated-data-schemas.js";
import {
  useLoginGmail,
  useRegisterGmail,
  useLogoutAccount,
  useVerifyToken,
  useGetAccount,
} from "../controllers/index.js";

const route = Router();

route.post("/login", validateSchema(validatedLogin), useLoginGmail);
route.post("/register", validateSchema(validatedRegister), useRegisterGmail);
route.post("/logout", useLogoutAccount);
route.get("/verify-token", useVerifyToken);
route.get("/account", TokenRequired, useGetAccount);

export default route;
