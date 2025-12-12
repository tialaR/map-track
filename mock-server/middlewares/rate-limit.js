export default function rateLimit(limit = 60) {
  let requests = 0;
  setInterval(() => { requests = 0; }, 60000);
  return (_req, res, next) => {
    requests++;
    if (requests > limit) {
      res.status(429).json({ error: 'Too many requests' });
      return;
    }
    next();
  };
}
