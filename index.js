import logger from './logger';
import app from './app';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  logger.info(`App listening on port ${port}!`);
});
