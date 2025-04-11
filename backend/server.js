import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('fuck you man');
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`server is runnin on port ${process.env.PORT}`);
});

//fD7crGjryXzNmG3B
