import express from 'express';
import cors from 'cors';

import { Env } from './config/env';
import { feedbackRoutes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(feedbackRoutes);

app.listen(Env.PORT || 3333, () => {
  console.log('[*] Server running at 3333!');
});
