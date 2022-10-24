import app from "./src/app";
import config from "./config";

const port = config.port;

app.listen(port, () => {
  console.log("Server is up and running!");
});
