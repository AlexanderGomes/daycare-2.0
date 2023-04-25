const { findUserByEmail, createUser } = require("../services/queries/user");
const { Hash } = require("../services/hashing");


const Register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ msg: "please enter all values" });
  }

  const userExists = await findUserByEmail(email);

  if (userExists) {
    return res.status(400).json({ msg: "email is taken" });
  }

  const hashedPassword = await Hash(password);

  const user = await createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(200).json(user);
};


const Login = async (req, res) => {
  res.send(req.body);
};

module.exports = {
  Register,
  Login,
};
