import express from 'express';
import request from 'supertest';
import { Server, createServer } from 'http';

import applicantRoutes from './applicantRoutes';
import { ROUTES } from './../constants';

// I will not make these test cases complicated with the actual database connection via testcontaienrs
// will go for simple mock of the database connection

jest.mock('typeorm', () => ({
  BaseEntity: class MockEntity {
    save = jest.fn();
    static find = jest.fn();
    static findOne = jest.fn();
    static delete = jest.fn();
  },
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
  Entity: jest.fn(),
  DataSource: class MockDataSource {
    getRepository = jest.fn().mockReturnValue({
      create: jest.fn().mockReturnValue({ id: 1, name: 'New Applicant', email: 'avinashrijal@gmail.com' }),
      find: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Applicant', email: 'avinashrijal@gmail.com' }]),
      findOneBy: jest.fn().mockResolvedValue({ id: 1, name: 'Test Applicant', email: 'avinashrijal@gmail.com' }),
      merge: jest.fn(),
      save: jest.fn().mockResolvedValue({ id: 1, name: 'New Applicant', email: 'avinashrijal@gmail.com' }),
      delete: jest.fn().mockResolvedValue({ affected: 1 }),
    });
  },
}));

describe('Applicant Routes', () => {
  let server: Server;

  beforeAll(async () => {
    const app = express();
    app.use(ROUTES.APPLICANT, applicantRoutes);
    server = createServer(app);
  });

  it('should get all applicants', async () => {
    const res = await request(server).get(ROUTES.APPLICANT);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Test Applicant', email: 'avinashrijal@gmail.com' }]);
  });

  it('should create an applicant', async () => {
    const res = await request(server)
      .post(ROUTES.APPLICANT)
      .send({ name: 'New Applicant' });
    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 1, name: 'New Applicant', email: 'avinashrijal@gmail.com' });
  });

  it('should get an applicant by id', async () => {
    const res = await request(server).get(`${ROUTES.APPLICANT}/1`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: 'Test Applicant', email: 'avinashrijal@gmail.com' });
  });

  it('should update an applicant', async () => {
    const res = await request(server)
      .put(`${ROUTES.APPLICANT}/1`)
      .send({ name: 'Updated Applicant' });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: 'New Applicant', email: 'avinashrijal@gmail.com' });
  });

  it('should delete an applicant', async () => {
    const res = await request(server).delete(`${ROUTES.APPLICANT}/1`);
    expect(res.status).toBe(204);
  });
});
