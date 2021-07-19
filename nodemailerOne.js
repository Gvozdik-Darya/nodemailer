const nodemailerConst = require("nodemailer");

const transporter = nodemailerConst.createTransport(
  {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "annetta.schumm83@ethereal.email",
      pass: "BhcUKRZsRDB6sGZQm1",
    },
  },
  {
    from: "Mailer Test <annetta.schumm83@ethereal.email>",
  }
);

const mailer = (message) => {
  console.log("need to send message");
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
