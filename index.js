import app from "./src/app.js";
import { ConnectionDB } from "./src/data-base.js";
import * as dotenv from "dotenv";
import colors from "colors";

dotenv.config();
ConnectionDB();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(` ● Server on port ${PORT} `.toUpperCase().bgBrightBlue.bold);
  console.log(` ➞ http://localhost:${PORT} `.underline.black.bold);
});
