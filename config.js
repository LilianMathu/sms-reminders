import env from "dotenv";

env.config()

export default {
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
  at_username: process.env.AT_USERNAME,
  at_key: process.env.AT_KEY,
};