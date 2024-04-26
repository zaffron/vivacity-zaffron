import { config } from "dotenv";
import { DataSource } from "typeorm";

import { Applicant } from "./entity/Applicant";
import { CreateApplicantTable1714154593918 } from "./migrations/1714154593918-CreateApplicantTable";

config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "vivacity",
  password: process.env.DB_PASSWORD || "vivacity",
  database: process.env.DB_NAME || "vivacity",
  entities: [Applicant],
  migrations: [CreateApplicantTable1714154593918],
  synchronize: false,
});

export const initializeDatabase = async () => {
  try {
      await dataSource.initialize();
      console.log('Data Source has been initialized!');
  } catch (err) {
      console.error('Error during Data Source initialization:', err);
  }
};
