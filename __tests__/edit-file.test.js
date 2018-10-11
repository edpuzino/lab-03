'use strict';

jest.mock('fs');

const edit = require('../edit-file.js');

describe('Read and write to a file module', () => {
  it('reads a file for added input', done => {
    let file = ['test.txt'];
    edit(file, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  })

});