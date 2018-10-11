'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( file.match(/bad.txt/) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};