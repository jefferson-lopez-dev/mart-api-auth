import app from "./src/app.js";
import { ConnectionDB } from "./src/data-base.js";
import * as dotenv from "dotenv";
import colors from "colors";

dotenv.config();
ConnectionDB();

const PORT = process.env.PORT || 3013;

app.listen(PORT, () => {
  console.log(` ● Server on port ${PORT} `.toUpperCase().bgBrightBlue.bold);
  console.log(" ➞ http://localhost:3013 ".underline.black.bold);
});
