import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from './../mail';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Maurício Romagnoli <romagnolimauricio@gmail.com>',
      subject,
      html: body
    });
  }

}

