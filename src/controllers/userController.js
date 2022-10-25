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
      res.status(500).json({
        message: "Failed to save user!",
        error,
      });
    }
  },

  listUsers: async (req, res) => {
    try {
      const users = await User.find({});

      if (users.length < 1) {
        return res.status(404).json({ message: "No users found!" });
      } else {
        return res.status(200).json({
          count: users.length,
          users,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  },

  listOneUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "No user found!" });
      } else {
        return res.status(200).json({
          user,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "No user found!" });
      } else {
        return res.status(200).json({
          message: "Deleted successfully!",
          user,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!user) {
        return res.status(404).json({ message: "No user found!" });
      } else {
        res.status(200).json({
          user,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  },
};

export default userController;
