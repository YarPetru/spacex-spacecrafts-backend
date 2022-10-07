const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers");

const isValidId = (req, __, next) => {
  const { dragonId } = req.params;
  const isCorrectId = isValidObjectId(dragonId);
  if (!isCorrectId) {
    const error = RequestError(400, `${dragonId} is invalid id format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
