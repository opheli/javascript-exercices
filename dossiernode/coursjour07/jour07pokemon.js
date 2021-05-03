

function catchPokemon (id){
    var request = require("request");
    request.get("https://pokeapi.co/api/v2/pokemon/" + id, function (err, res, body) {
        let pokemon =JSON.parse(body);
        console.log("Id:", pokemon.id, "name:",pokemon.name);
    })
}
catchPokemon(6)