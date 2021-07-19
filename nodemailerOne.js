const nodemailer = require("nodemailer");

async function mailer(message) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport(
    {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    },
    {
      from: `Mailer Test <${testAccount.user}>`,
    }
  );
  transporter.verify(() => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  let info = await transporter.sendMail(message);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = mailer;
