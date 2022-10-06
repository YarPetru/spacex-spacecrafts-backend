// const { User } = require("../../models/user");

const current = async (req, res) => {
  const { email, name } = req.user;
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = current;
