'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.createProduct = function createProduct (req, res, next) {
  var product = req.swagger.params['product'].value;
  Product.createProduct(product)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var productName = req.swagger.params['productName'].value;
  Product.deleteProduct(productName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct = function getProduct (req, res, next) {
  var productName = req.swagger.params['productName'].value;
  Product.getProduct(productName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
