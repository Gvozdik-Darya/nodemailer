const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mailer = require("./nodemailerOne");

const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/registration", (req, res) => {
  const message = {
    to: req.body.email,
    subject: "Congratulations! You are successfully registred on our site",
    text: `Поздравляем, Вы успешно зарегистрировались на нашем сайте!
      данные вашей учетной записи:
      login: ${req.body.email}
      password: ${req.body.pass}`,
  };
  mailer(message);
});

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}/registration`)
);
