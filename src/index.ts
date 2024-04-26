import { createServer } from 'http';

import { startApp } from './app';

const PORT = process.env.PORT || 3000;

startApp().then((app) => {
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
