import fs from 'fs';
import path from 'path';
const base = path.join(process.cwd(), 'db.base.json');
const dest = path.join(process.cwd(), 'db.json');

fs.copyFileSync(base, dest);
console.log('🔄 Database reset to base state (db.json updated).');
