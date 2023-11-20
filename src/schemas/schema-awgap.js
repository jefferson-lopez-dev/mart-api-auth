import { Schema, model } from "mongoose";

const schema_awgap = new Schema({
  gmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model("awgap", schema_awgap);
