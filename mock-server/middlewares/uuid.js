import { randomUUID } from 'crypto';

export default function uuid(req, _res, next) {
  if ((req.method === 'POST' || req.method === 'PUT') && req.body && !req.body.id) {
    req.body.id = randomUUID();
  }
  next();
}
