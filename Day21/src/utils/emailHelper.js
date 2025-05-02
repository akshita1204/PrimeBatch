//

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_SERVICE_PASSWORD, 
  },
});

//function to send the OTP 
const sendMail=async ({emails,subject,html})=>
{
   try
   {
    const info = await transporter.sendMail({
        from: '"Admin" <akshita@gmail.com>', // sender address
        to: emails, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
      });
   }
   catch(err)
   {
    console.log("Could not send email to",emails);
    console.log(err.message);
   }
}

const sendOtpMail=async({otp,email})=>
{
    await sendMail({
        subject:"Otp Verification",
        emails:[email],
        html:`
        <html>
    <body>
        <div style="display:flex; align-items: center; justify-content: center; background-color: antiquewhite;">
            <div style="padding:2rem">
               <h2>OTP Verification</h2>
               <p>Your OTP for verification is ${otp}</p>
            </div>

        </div>
    </body>
</html>

          `
    })
}

module.exports={
    sendOtpMail
}