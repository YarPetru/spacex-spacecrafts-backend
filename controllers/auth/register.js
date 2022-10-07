// const bcrypt = require("bcryptjs");

// const { User } = require("../../models/user");
// const { Conflict } = require("http-errors");

// const signup = async (req, res, next) => {
//   const { email, password, name } = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw new Conflict(`User with ${email} already exist`);
//   }
//   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
//   await User.create({
//     name,
//     email,
//     password: hashPassword,
//   });
//   res.status(201);
//   next();
// };

// module.exports = signup;

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
  // const result = await User.create({ name, email, password: hashPsw });
  // res.status(201).json({
  //   email: result.email,
  // });
};

module.exports = register;
