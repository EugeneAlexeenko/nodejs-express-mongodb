import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);

export default app;
