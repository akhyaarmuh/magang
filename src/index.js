import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import userRouter from './routes/user.js';

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
