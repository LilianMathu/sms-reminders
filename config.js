import env from "dotenv";

env.config()

export default {
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
};