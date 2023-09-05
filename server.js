const express = require('express');
require('dotenv').config();
const EMAIL_USER = process.env.EMAIL_USER;
const PASSWORD_USER = process.env.PASSWORD_USER;
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: EMAIL_USER,
         pass: PASSWORD_USER
      }
   })

   const mailOprions = {
      from: req.body.email,
      to: EMAIL_USER,
      subject: req.body.subject,
      text: `Message from ${req.body.name}, number: ${req.body.number}. Text: ${req.body.message}`
   }

   transporter.sendMail(mailOprions, (error, info) => {
      if (error) {
         console.log(error);
         res.send('error');
      } else {
         console.log('Email sent');
         res.send('success');
      }
   })
})

app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
})
