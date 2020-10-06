// Copyright 2020 FlareCO

var request = require('request');

exports.getRandomVid = function (key, keyname, callback){
  var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='+keyname+'&key=' + key;
  request(url, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      var obj = JSON.parse(body);
      obj = obj.items;

      obj  = obj.filter(function (obj) {
        return obj.id.kind == 'youtube#video';
      });
      var chosen = obj[Math.floor(Math.random() * obj.length)];
      callback(null ,chosen);
    }else  {
      callback(body , null);
    }
  })
}
