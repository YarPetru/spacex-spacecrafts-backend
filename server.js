const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 9999 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connect successfull");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
