//

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "takshita061@gmail.com",
    pass: "mrms yvni vmps mvmx",
  },
});

//function to send the OTP 
const sendMail=()=>
{
    
}