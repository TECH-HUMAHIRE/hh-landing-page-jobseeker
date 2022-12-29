import { createTransport } from 'nodemailer';

const {
  gmail: { password, recipient, sender },
} = config();

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password,
  },
});
