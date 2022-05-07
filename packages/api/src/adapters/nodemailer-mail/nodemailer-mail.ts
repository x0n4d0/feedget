import nodemailer from 'nodemailer';

import { Env } from './../../config/env';
import { MailAdapter, SendMailData } from './../mail';

const transport = nodemailer.createTransport({
  host: Env.SMTP_HOST,
  port: Number(Env.SMTP_PORT),
  auth: {
    user: Env.SMTP_USER,
    pass: Env.SMTP_PASSWORD
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

