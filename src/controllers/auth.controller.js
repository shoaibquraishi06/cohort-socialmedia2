const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function registerController(req, res) {
  const { username, password } = req.body;

  const isUserAlreadyExites = await userModel.findOne({ username });

  if (isUserAlreadyExites) {
    return res.status(400).json({
      message: "User already Exits",
    });
  }

  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token);

  return res.status(201).json({
    message: "user registred successfully",
  });
}


 async function loginController(req,res) {

    const {username,password} = req.body

    const user =await userModel.findOne({username})

    if(!user){
        return res.status(400).json({
            message:"Invalid Credentials"
        })
    }

    const isPasswordValid =  bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid Credentials"
        })
    }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token);

  if (user.password === password) {
    return res.status(200).json({
      message: "login successfully",
      user: {
        id: user._id,
        username: user.username,
        password: user.password,
      },
    });
  }
}

module.exports = {
  registerController,
  loginController,
};
