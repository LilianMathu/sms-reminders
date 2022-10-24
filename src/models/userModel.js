import { Schema, model, trusted } from "mongoose";

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
  },
  {
    timestamps: true,
  },
  {
    collection: "Users",
  }
);

export default model("User", userSchema);
