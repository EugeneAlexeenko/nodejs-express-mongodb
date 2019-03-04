import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router';
import logger from './logger';

const app = express();

const connectionUrl = process.env.MONGO_DB_URL;
const connectionOptions = {
  useNewUrlParser: true,
};

mongoose.set('debug', true);
mongoose.connect(connectionUrl, connectionOptions);

const db = mongoose.connection;

db.on('error', () => {
  logger.error('Connection error');
});

db.once('open', () => {
  logger.info('Connected.');
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);

export default app;
