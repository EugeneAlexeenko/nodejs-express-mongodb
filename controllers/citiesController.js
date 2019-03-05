import CityModel from '../models/CityModel';
import citiesToInsert from '../mockCities';

const insertMockCities = async (req, res) => {
  try {
    await CityModel.insertMany(citiesToInsert);

    res.status(201).json({
      message: 'Mock cities has been inserted',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const createCity = async (req, res) => {
  const newCity = new CityModel(req.body);

  try {
    const insertedCity = await newCity.save();

    res.status(201).json({
      message: 'City has been created',
      data: insertedCity.result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await CityModel.find({});

    res.status(200).json({
      message: 'Cities received',
      data: cities,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const getRandomCity = async (req, res) => {
  const getRandomNumberFromZeroToMax = max => Math.floor(Math.random() * Math.floor(max));
  const getRandomItemFromArray = items => items[getRandomNumberFromZeroToMax(items.length)];

  try {
    const cities = await CityModel.find();
    if (!cities.length) {
      res.status(404).json({
        message: 'No cities found',
      });
    }

    const randomCity = getRandomItemFromArray(cities);

    res.status(200).json({
      message: 'Random city received',
      data: randomCity,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const updateCity = async (req, res) => {
  const { id } = req.params;
  const updatedCity = req.body;

  try {
    const updateResult = await CityModel.findOneAndUpdate({ _id: id }, updatedCity, {
      upsert: true,
      new: true,
    });

    res.status(200).json({
      message: 'City successfully updated',
      data: updateResult,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message,
    });
  }
};

const deleteCity = async (req, res) => {
  const { id } = req.params;
  try {
    await CityModel.findByIdAndRemove(id);

    res.status(200).json({
      message: 'City successfully deleted',
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
  createCity,
  getAllCities,
  getRandomCity,
  updateCity,
  deleteCity,
};
