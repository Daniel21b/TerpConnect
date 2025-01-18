import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
