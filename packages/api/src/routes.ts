import { Router } from 'express'

import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback';
import { NodemailerMailAdapter } from './adapters/nodemailer-mail/nodemailer-mail';

export const feedbackRoutes = Router();

feedbackRoutes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodeMailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodeMailerMailAdapter);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return response.status(201).send();
});
