import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// import custom middlewares
import delay from './middlewares/delay.js';
import logger from './middlewares/logger.js';
import uuid from './middlewares/uuid.js';
import rateLimit from './middlewares/rate-limit.js';

server.use(middlewares);
server.use(jsonServer.bodyParser);

// custom middlewares (order matters)
server.use(delay(300));
server.use(logger);
server.use(rateLimit(60));
server.use(uuid);

// health check
server.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// Example: custom route to get today's records
server.get('/records_day/today', (req, res) => {
  const db = router.db.getState();
  const today = new Date().toISOString().slice(0,10);
  const records = db.records_day ? db.records_day.filter(r => r.date === today) : [];
  res.json(records);
});

server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Mock API running at: http://localhost:${PORT}`);
});
