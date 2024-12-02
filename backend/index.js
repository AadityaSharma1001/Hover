import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/db.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectDB();

const port = process.env.PORT || 3000;

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port , () => {
  console.log("Server is running on port " + port);
});