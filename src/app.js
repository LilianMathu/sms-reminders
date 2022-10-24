import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import config from "../config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

// Install middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Db connection
const db = config.db_uri;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database failed to connect!", error);
  }
};

connectDB();

// Install routes
app.use(userRoute);

export default app;
