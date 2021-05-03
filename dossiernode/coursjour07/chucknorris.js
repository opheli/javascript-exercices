var request = require("request");

request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
    
    let chuckNorris = JSON.parse(body);
    let blague = chuckNorris.value 
    console.log(blague);
    
});
