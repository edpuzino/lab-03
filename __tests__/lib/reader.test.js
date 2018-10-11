'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');
const file1 = require('../../files/1.txt');
const file2 = require('../../files/2.txt');
const file3 = require('../../files/3.txt');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });


  it('reads 3 files', done => {
    let files = ['file1', 'file2', 'file3'];
    console.log(files);
    reader(files, (err,data) => {
      //expect(err).toBeNull();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });

});
