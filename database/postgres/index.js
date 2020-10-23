//Postgres Index JS Connection File

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'jacobjohnsonrr',
  database: 'reviews_database',
  password: 'hackreactor',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to Postgres DB!');
  }
});

module.exports = client;