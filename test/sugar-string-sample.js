var assert = require('assert');

describe('Sugar Sample', function() {

  var sample = require('../sugar-string-sample');

  it('should return sample text', function() {
    assert.equal('1 example!', sample('foo', 1, 2, 3));
  });

});
