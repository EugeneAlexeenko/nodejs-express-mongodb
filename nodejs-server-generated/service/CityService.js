'use strict';


/**
 * Add a new city
 * Add a new city to the collection
 *
 * city City  (optional)
 * no response value expected for this operation
 **/
exports.createCity = function(city) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete city
 *
 * cityId Integer ID of city to delete
 * no response value expected for this operation
 **/
exports.deleteCity = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all cities
 * Returns a list of cities
 *
 * returns List
 **/
exports.getAllCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "capital" : true,
  "city" : "city",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "country" : "country",
  "capital" : true,
  "city" : "city",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get random city
 * Returns random city
 *
 * returns City
 **/
exports.getRandomCity = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "capital" : true,
  "city" : "city",
  "lastModifiedDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update city
 *
 * cityId Integer ID of city to update
 * no response value expected for this operation
 **/
exports.updateCity = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

