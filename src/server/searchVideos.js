import url from 'url';
import axios from 'axios';

export default function (request, response, next){

  let query = url.parse(request.url, true).query;

  response.writeHead(200, {'Content-Type': 'application/json'});

  let apiKey = 'AIzaSyBaw0mOT7PZm5RrHr-s35yXOY6fzoCBdsY';

  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${apiKey}&q=${query.q}`)
  .then(res => {
    response.end(JSON.stringify(res.data));
    next();
  });

}
