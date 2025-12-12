import fs from 'fs';
import { randomUUID } from 'crypto';

const dbPath = './db.json';
const raw = fs.readFileSync(dbPath, 'utf8');
const db = JSON.parse(raw);

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  const colors = ['#FF4C4C', '#FFC857', '#2A9D8F', '#4C6EF5'];
  return colors[Math.floor(Math.random()*colors.length)];
}

function makeMarker() {
  return {
    id: randomUUID(),
    x: randomInt(100, 1400),
    y: randomInt(50, 900),
    color: randomColor()
  };
}

function makeSubmap(i) {
  const markers = Array.from({length: randomInt(2,6)}, makeMarker);
  return {
    id: `sub-${i}-${randomUUID().slice(0,8)}`,
    title: `Submap Auto ${i}`,
    description: 'Generated automatically',
    image: 'data:image/png;base64,REPLACE_BASE64',
    markers
  };
}

const submaps = Array.from({length:5}, (_,i)=> makeSubmap(i+1));
db.submaps = submaps;

// add some records for today
const today = new Date().toISOString().slice(0,10);
db.records_day = db.records_day || [];
db.records_day.push({
  id: `rec-${randomUUID().slice(0,8)}`,
  title: `Auto Record ${today}`,
  date: today,
  images: [
    { id: `img-${randomUUID().slice(0,8)}`, filename: 'auto.png', image: 'data:image/png;base64,REPLACE_BASE64', timestamp: Date.now() }
  ]
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('✨ Fake data generated and written to db.json');
