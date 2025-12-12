# MapTrack Mock Server (JSON Server)
This mock server provides fake REST endpoints for the MapTrack frontend during development.

## Available scripts
- `npm start` - run the custom json-server with middlewares
- `npm run reset` - reset db.json from db.base.json
- `npm run fakes` - generate fake data into db.json
- `npm run routes` - print available collections

## Structure
- `db.base.json` - canonical base database
- `db.json` - runtime database (ignored by git)
- `middlewares/` - helpful middlewares (delay, logger, uuid, rate-limit)
- `scripts/` - utility scripts (reset, generate fakes, print routes)

## Run
```bash
npm install
npm run reset
npm start
```

Server will run on http://localhost:5000
