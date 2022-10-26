import Otp from "../models/OtpModel";
import User from "../models/userModel";
import { isExpired, generateOtp, addMinutes } from "../utils/otp";
import sendMessage from "../utils/sms";

const otpController = {
  verifyOtp: async (req, res) => {
    try {
      const otp = await Otp.findOne({ user: req.params.id, otp: req.body.otp });

      //   Get user
      const user = await User.findById(req.params.id);

      //   Ensure OTP is not empty
      if (!otp) {
        return res.status(404).json({
          message: "Otp not found!",
        });
      }

      //   If OTP is found, check expiry
      const checkExpired = isExpired(otp.expiry);

      if (checkExpired) {
        otp.otp = generateOtp();

        otp.expiry = addMinutes(10);

        await otp.save();

        // Send OTP via Africastkng
        await sendMessage(user.phone, `Your OTP is ${otp.otp}`);

        return res.status(404).json({
          message: "Invalid OTP!",
        });
      }

      //   Update user status
      user.active = true;

      await user.save();

      return res.status(201).json({
        message: "Verification successful",
      });
    } catch (error) {}
  },
};

export default otpController;
