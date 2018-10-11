'use strict';

const fs = require('fs');
const file = require('./files/test.txt');
/*
module.exports = exports = (file) => {
  readAll(file);
};
*/

console.log(file)
  
const readOne = (file) => {
  fs.readFile( file, (err, data) => {
      
  });
};
  