import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const URL_DATABASE = process.env.URL_MONGO_DB_ATLAS;

export const ConnectionDB = async () => {
  try {
    await connect(
      "mongodb+srv://jefferson__dev:T87alLXy3W8E6z6J@mart-auth.p6ynru1.mongodb.net/mart-auth?retryWrites=true&w=majority"
    );
    console.log("● DB is connected");
  } catch (error) {
    console.log("● Disconnected to db", error);
  }
};
