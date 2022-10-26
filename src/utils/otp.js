export const generateOtp = () => {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

export const addMinutes = (minutes) => {
  const date = new Date();
  return new Date(date.getTime() + minutes * 60000);
};

export const isExpired = (expiry) => {
    const expiryDate = new Date(expiry)
    return new Date() > expiryDate
};
