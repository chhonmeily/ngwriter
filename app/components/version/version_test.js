'use strict';

describe('ngWriter.version module', function() {
  beforeEach(module('ngWriter.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
