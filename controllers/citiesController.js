import { MongoClient } from 'mongodb';
import logger from '../logger';
import citiesToInsert from '../mockCities';

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;

const findAllCities = async () => {
  let client;
  let db;
  let collection;
  let cities;

  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db(dbName);
    collection = db.collection('cities');
    cities = await collection.find().toArray();
  } catch (err) {
    logger.error(err);
  }

  return cities;
};

const getRandomNumberFromZeroToMax = max => Math.floor(Math.random() * Math.floor(max));
const getRandomItemFromArray = items => items[getRandomNumberFromZeroToMax(items.length)];

const insertMockCities = async (req, res) => {
  let client;
  let db;
  let collection;

  try {
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db(dbName);
    collection = db.collection('cities');
  } catch (err) {
    logger.error(err);
  }

  try {
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
