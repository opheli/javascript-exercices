var request = require("request");

request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {
    
    let countriesNames = [];
    let getCountries = JSON.parse(body);
    countriesNames = getCountries.map (function(element) {
        return element.name + " -"; 
       
    });

    console.log("countries: ", countriesNames);
});


