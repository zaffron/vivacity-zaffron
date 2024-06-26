import express from 'express';
import request from 'supertest';
import { createServer } from 'http';

import defaultRoutes from './defaultRoutes';

const app = express();
app.use('/', defaultRoutes);
const server = createServer(app);

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });
  it('should return "Hello Vivacity!"', (done) => {
    request(server)
      .get('/')
      .expect('Hello Vivacity!', done);
  });
});
