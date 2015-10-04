var qs = require('qs');
var request = require('request');

function endpoint(route, options, cb){
  if (typeof options === 'function') cb = options;
  request('https://archive.org/'+ route + '?' + qs.stringify(options) + '&output=json',
    function(err, res, body) {
      if (err) cb(err);
      else if (res.statusCode == 200) cb(null, JSON.parse(body));
    }
  )
}

function meta(id, cb){
	request('https://archive.org/metadata/' + id + '&output=json',
    function(err, res, body) {
      if (err) cb(err);
      else if (res.statusCode == 200) 
      	cb(null, JSON.parse(body));
    }
  )
}

module.exports = {
  advancedSearch: function(options, cb) {endpoint("advancedsearch.php", options, cb)},
  metadata: function(id, cb) {meta(id, cb)}
}