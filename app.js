const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const authRouter = require("./routes/api/auth");
// const dragonsRouter = require("./routes/api/dragons);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);
// app.use("/api/dragons", dragonsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;
