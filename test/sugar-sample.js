var assert = require('assert');

describe('Sugar Sample', function() {

  var sample = require('../sugar-sample');

  it('should return sample text', function() {
    assert.equal('3 args!', sample('foo', 1, 2, 3));
  });

});
