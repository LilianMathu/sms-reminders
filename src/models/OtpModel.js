import { Schema, model } from "mongoose";

const otpSchema = new Schema(
  {
    otp: {
      type: Number,
      required: true,
    },
    expiry: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Otp", otpSchema);
