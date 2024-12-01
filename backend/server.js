import http from 'http';
import app from './app.js';

const server = http.createServer((req, res) => {
  res.end('Hello World');
});