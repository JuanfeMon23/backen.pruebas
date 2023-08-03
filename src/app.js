import express from 'express';
import {UserRoutes} from './routes/Users.routes.js'

const app = express();

app.use(express.json());

app.use('/api',UserRoutes);

export default app;