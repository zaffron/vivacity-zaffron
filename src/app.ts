import express from 'express';

import applicantRoutes from './routes/applicantRoutes';
import defaultRoutes from './routes/defaultRoutes';
import { initializeDatabase } from './db';
import { ROUTES } from './constants';

export async function startApp() {
  await initializeDatabase();
  const app = express();

  app.use(express.json());
  app.use(ROUTES.APPLICANT, applicantRoutes);
  app.use(ROUTES.DEFAULT, defaultRoutes);

  return app;
};

