const nodemailer = require('nodemailer');

const email = process.env.EMAIL;

if (!email) {
  console.error('EMAIL environment variable not set');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: process.env.EMAIL_PASSWORD
  }
});

const message = {
  from: email,
  to: email,
  subject: 'Pipeline executado!',
  text: 'O pipeline foi executado com sucesso!'
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  }

  console.log('Email sent:', info.response);
});
