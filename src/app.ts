import express, { Express } from 'express';
import 'dotenv/config';
import routes from './routes/index.js';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/anagrams', routes.v1.anagrams);
app.use('/v2/anagrams', routes.v2.anagrams);

export default app;
