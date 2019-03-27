'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.createCity = function createCity (req, res, next) {
  var newCity = req.swagger.params['city'].value;
  City.createCity(newCity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCity = function deleteCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  City.deleteCity(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCities = function getAllCities (req, res, next) {
  City.getAllCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRandomCity = function getRandomCity (req, res, next) {
  City.getRandomCity()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCity = function updateCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  var updatedCity = req.swagger.params['city'].value;
  City.updateCity(cityId, updatedCity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
