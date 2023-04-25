const User = require("../../models/user");

const findUserByEmail = async (email) => {
  const query = { email };
  const user = await User.findOne(query);
  return user;
};


const createUser = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

module.exports = {
  findUserByEmail,
  createUser,
};
