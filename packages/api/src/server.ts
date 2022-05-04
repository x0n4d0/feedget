import express from 'express';

import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;

  const createdFeedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  return response.status(201).json({ data: createdFeedback });
});

app.listen(3333, () => {
  console.log('[*] Server running at 3333!');
});
