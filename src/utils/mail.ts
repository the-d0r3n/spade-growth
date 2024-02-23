import nodemailer from 'nodemailer';

export const confirmEmail = (email: string, subject: string, text: string, html: string) => {
  if (!process.env.GMAIL_EMAIL_ADDRESS) {
    return;
  }
  
  const message = {
    from: process.env.GMAIL_EMAIL_ADDRESS,
    to: email,
    subject,
    text,
    html,
  };
  
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      console.error(`Connection refused at ${err.address}`);
    } else {
      console.info(`Message delivered to ${info.address}`);
    }
  });
}
