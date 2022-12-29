// eslint-disable-next-line @typescript-eslint/no-var-requires
import { https } from 'firebase-functions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { createTransport } from 'nodemailer';

const sender = '<THE_EMAIL_YOU_JUST_CREATED';
const password = '<THE_PASSWORD_YOU_JUST_CREATED>';
const recipient = '<THE_EMAIL_YOU_ARE_SENDING_TO>';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password,
  },
});

const mailOptions = {
  from: sender,
  to: recipient,
  subject: 'Firebase Message',
  text: 'Working',
  html: '<h1>Working</h1>',
};

const transport = (error: any, { messageId }: any) =>
  error ? console.log(error) : console.log(messageId);

const handleEmail = (req: any, res: any) => {
  transporter.sendMail(mailOptions, transport);
  res.send({ status: 200 });
};

module.exports = https.onRequest(handleEmail);
