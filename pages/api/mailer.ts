const nodemailer = require('nodemailer');
export default async (req: any, res: any) => {
  const bodyData = JSON.parse(req.body);
  async function main() {
    let htmlMessage = '';
    let textMessage = '';
    let subject = 'Form Submission';
    let recipient = 'scott@scottwamba.ch';

    Object.entries(bodyData).forEach((entry, index) => {
      if (entry[0] === 'subject') {
        //@ts-ignore
        subject = entry[1];
      }
      if (entry[0] === 'recipient') {
        //@ts-ignore
        recipient = entry[1];
      }

      if (
        entry[0] !== 'hpFirst' &&
        entry[0] !== 'recipient' &&
        entry[0] !== 'submit' &&
        entry[0] !== 'subject' &&
        entry[0] !== 'currentPath' &&
        entry[1] !== ''
      ) {
        htmlMessage += `<li>${entry[0]}: ${entry[1]}</li>`;
        textMessage += `${entry[0]}: ${entry[1]}${
          Object.entries(bodyData).length - 1 !== index && ', '
        }`;
      }
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
      }
      if (success) {
        console.log('Server is ready to take our messages');
      }
    });

    const info = await transporter.sendMail({
      from: '"Developers Donating Work" <scott@scottwamba.ch>',
      to: recipient,
      subject,
      text: textMessage,
      html: htmlMessage,
      auth: {
        user: 'scott@scottwamba.ch',
      },
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }

  main()
    .then(() => res.status(200).json({ message: 'Success' }))
    .catch(() => {
      fetch(`${process.env.SITE_URL}api/slack`, {
        method: 'POST',
        body: `There was a problem with form "${bodyData.subject}" at ${
          process.env.SITE_URL
        }${bodyData.currentPath.split('/')[1]}`,
      });
      return res.status(500).json({ message: console.error });
    });
};
