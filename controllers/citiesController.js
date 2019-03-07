import { MongoClient } from 'mongodb';
import logger from '../logger';
import citiesToInsert from '../mockCities';

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;

const findAllCities = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db(dbName);
  const collection = db.collection('cities');
  const cities = await collection.find().toArray();

  return cities;
};

const getRandomNumberFromZeroToMax = max => Math.floor(Math.random() * Math.floor(max));
const getRandomItemFromArray = items => items[getRandomNumberFromZeroToMax(items.length)];

const insertMockCities = async (req, res) => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const collection = db.collection('cities');
    const insertResult = await collection.insertMany(citiesToInsert);

    logger.info(`Inserted ${insertResult.insertedCount} documents into the collection`);
    res.status(201).json({
      message: 'Mock cities has been inserted',
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getRandomCity = async (req, res) => {
  try {
    const cities = await findAllCities();
    const randomCity = getRandomItemFromArray(cities);

    res.status(200).json({
      message: 'Random city:',
      data: randomCity,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

export default {
  insertMockCities,
  getRandomCity,
};
