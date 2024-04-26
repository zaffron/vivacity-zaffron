import express from 'express';
import { Request, Response } from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Vivacity!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
