const { catchAsync } = require("../utils/miscellany")

exports.getActiveUsers = catchAsync(async (req,res,next) => {
  res.status(200).json({
    status: "success",
    users: "lista de usuarios"
  })
})
exports.login = catchAsync(async (req,res,next) => {
  res.status(200).json({
    status: "success",
    token: "token"
  })
})