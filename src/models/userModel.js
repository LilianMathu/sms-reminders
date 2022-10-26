import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
