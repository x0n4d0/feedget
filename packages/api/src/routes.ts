import { Router } from 'express'
import nodemailer from 'nodemailer';

import { prisma } from './prisma';

export const feedbackRoutes = Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

feedbackRoutes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const createdFeedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Maurício Romagnoli <romagnolimauricio@gmail.com>',
    subject: 'Novo feedback',
    html: [
      '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      '</div>'
    ].join('\n')
  });

  return response.status(201).json({ data: createdFeedback });
});
