const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, `User with ${email} already exist`);
  }
  const hashPsw = await bcrypt.hash(password, 10);
  await User.create({
    name,
    email,
    password: hashPsw,
  });
  res.status(201);
  next();
};

module.exports = register;
