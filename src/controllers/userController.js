import User from "../models/userModel";

const userController = {
  register: async (req, res) => {
    const { name, phone } = req.body;

    // Check for empty fields
    if (!(name && phone)) {
      res.status(401).send("Input the required fields!");
    }

    // Ensure phone number is unique
    const existingPhone = await User.findOne({ phone });

    if (existingPhone) {
      res.status(401).send("Registration failed!");
    }

    //   Save user
    try {
      const user = new User({ name, phone });
      const saveUser = await user.save();
      res.status(201).json({ message: "User saved!", saveUser });
    } catch (error) {
      res.status(500).json({ message: "Failed to save user!", error });
    }
  },
};
