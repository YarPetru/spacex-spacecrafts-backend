const { User } = require("../../models/user");

const logout = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: null });
  res.status(204).json({ message: "Logout is successful" });
};

module.exports = logout;
