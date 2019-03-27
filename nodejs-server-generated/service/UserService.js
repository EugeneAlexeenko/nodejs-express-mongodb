'use strict';


/**
 * Add a new user
 *
 * user User  (optional)
 * no response value expected for this operation
 **/
exports.createUser = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 *
 * userEmail String email of user to delete
 * no response value expected for this operation
 **/
exports.deleteUser = function(userEmail) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all users
 * Returns array of all users
 *
 * returns List
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "email" : "email",
  "username" : "username"
}, {
  "password" : "password",
  "email" : "email",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by email
 * Returns user with provided email
 *
 * userEmail String email of user
 * returns List
 **/
exports.getUserById = function(userEmail) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "password" : "password",
  "email" : "email",
  "username" : "username"
}, {
  "password" : "password",
  "email" : "email",
  "username" : "username"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

