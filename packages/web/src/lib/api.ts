import axios from 'axios';

import { Env } from './../config/env/env';

export const api = axios.create({
  baseURL: Env.API_URL
});
