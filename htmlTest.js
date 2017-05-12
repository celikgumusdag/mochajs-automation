var assert = require('assert');
var http = require('https');

describe('htmlTest', function () {
  it('should return 200', function (done) {
    http.get('https://www.ciceksepeti.com', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should have logo', function (done) {
    http.get('https://www.ciceksepeti.com', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        var isContains=data.includes("site-logo");
        assert.equal(true,isContains);
        done();
      });
    });
  });
});