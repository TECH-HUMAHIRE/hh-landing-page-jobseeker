// eslint-disable-next-line @typescript-eslint/no-var-requires
const { https } = require('firebase-functions');

const sendEmail = https.onRequest((req: any, res: any) => {
  res.send({ status: 200 });
});

module.exports = sendEmail;
