# RandomYoutubeVideoByKeyword
Get a Random YouTube Video by Keyword

# Install
npm i random-youtube-video-by-keyword

# How to Use

var youtube = require('random-youtube-video-by-keyword');


youtube.getRandomVid(key, keyword, function(err , data){
  //key is your youtube api key
  //keyword is the search word for random videos. ex: dubstep, nightcore, 8d music
  //data is a JSON object
})
