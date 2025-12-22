import fs from 'fs';
const raw = fs.readFileSync('./db.json','utf8');
const db = JSON.parse(raw);
console.log('Available collections/routes:');
Object.keys(db).forEach(k => console.log('-', k));
