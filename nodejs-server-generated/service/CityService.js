'use strict';
const CityModel = require('../models/CityModel');

/**
 * Add a new city
 * Add a new city to the collection
 *
 * city City  (optional)
 * no response value expected for this operation
 **/
exports.createCity = async function(city) {
  const newCity = new CityModel(city);
  const insertedCity = await newCity.save();

  return {
    message: 'City has been created',
    data: insertedCity.result,
  };
}


/**
 * Delete city
 *
 * cityId Integer ID of city to delete
 * no response value expected for this operation
 **/
exports.deleteCity = async function(cityId) {
  await CityModel.findByIdAndRemove(cityId);

  return {
    message: 'City successfully deleted',
  };
}


/**
 * Get all cities
 * Returns a list of cities
 *
 * returns List
 **/
exports.getAllCities = async function() {
  const cities = await CityModel.find({});

  return cities;
};


/**
 * Get random city
 * Returns random city
 *
 * returns City
 **/
exports.getRandomCity = async function() {
  const getRandomNumberFromZeroToMax = max => Math.floor(Math.random() * Math.floor(max));
  const getRandomItemFromArray = items => items[getRandomNumberFromZeroToMax(items.length)];

  const cities = await CityModel.find();

  if (!cities.length) {
    return { message: 'No cities found' };
  }

  const randomCity = getRandomItemFromArray(cities);

  return {
    message: 'Random city received',
    data: randomCity,
  };
}
;

/**
 * Update city
 *
 * cityId Integer ID of city to update
 * no response value expected for this operation
 **/
exports.updateCity = async function(cityId, updatedCity) {
  const updateResult = await CityModel.findOneAndUpdate({ _id: cityId }, updatedCity, {
    upsert: true,
    new: true,
  });

  return {
    message: 'City successfully updated',
    data: updateResult,
  };
}

