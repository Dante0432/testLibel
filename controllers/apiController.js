const { catchAsync } = require("../utils/miscellany")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const User = require("../models/User")

exports.getActiveUsers = catchAsync(async (req,res,next) => {
  console.log('entra')
  const users = await User.find({status:true})
  res.status(200).json({
    status: "success",
    users
  })
})
exports.login = catchAsync(async (req,res,next) => {
  const user = await User.findOne({ email: req.body.email })
  
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword||!user) throw new Error('Invalid username or password')
    // create token
    const token = jwt.sign({
      name: user.name,
      id: user._id
    }, process.env.TOKEN_SECRET)
  
  res.status(200).json({
    status: "success",
    token
  })
})

exports.createUser = catchAsync(async (req,res,next) => {
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt)
  const user = new User(req.body);
  const savedUser = await user.save()

  res.status(200).json({
    status: "success",
    savedUser
  })
})