const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS
  }
})

router.route('/')
.post((req, res) => {
  const {name, email, topic, comments} = req.body
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    sender: email,
    replyTo: email,
    to: process.env.NODEMAILER_EMAILTO,
    subject: `BEERCODE - New message from ${name.length==0?'Anonymous':name}`,
    html: 
    `<h4>${topic}</h4>
    <p>From: ${name.length==0?'Anonymous':name}</p>
    <p>Email: ${email}</p>
    <p>${comments}</p>`
  }
  transporter.sendMail(mailOptions, (err, info) => {
    console.log(err);
    console.log(info);
    err?res.status(400):res.status(200).send(info)
  })
})

module.exports = router;