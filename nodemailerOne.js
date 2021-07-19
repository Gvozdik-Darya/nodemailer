const nodemailer = require("nodemailer");

async function mailer(message) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport(
    {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    },
    {
      from: `Mailer Test <${testAccount.user}>`,
    }
  );

  let info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = mailer;
