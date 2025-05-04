/*
POST : /api/v1/auth/otps (email in the body)
*/
const { OtpModel } = require("../../../../models/otp")
const { sendOtpMail } = require("../../../../utils/emailHelper")
const bcrypt = require("bcryptjs")
const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;

    //only send the otp if it was send before 10 min atleast
    const otp = Math.floor(Math.random() * 9000 + 1000);

    await sendOtpMail({ otp, email });

    const salt = await bcrypt.genSalt(14);
    console.log("salt=>", salt)
    const hash = await bcrypt.hash(otp + '', salt);
    console.log("hash=>", hash)

    OtpModel.create({
      email: email,
      otp: hash
    })

    res.status(201);
    res.json({
      status: "success",
      message: "OTP send successfully",
    })
  }
  catch (err) {
    console.log(err.message);
    res.status(500);
    res.json({
      status: "fail",
      message: "Internal Server Error",
    })
  }
}
module.exports = { sendOtpController }
//salt is used