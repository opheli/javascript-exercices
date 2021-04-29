var fs = require("fs");

/*console.log("C'est parti pour la recherche :");

fs.stat("test.txt", function (err, stats) {
   if (err) {
       return console.error(err);
   }

   console.log(stats);
   console.log("Et voilà ! Voyons le résultat");
   
	 if (stats.isFile()) { // simplification de  if (stats.isFile() === true)
		 console.log("C'est un fichier !");
	 }

	 if (stats.isDirectory()) { // simplification de  if (stats.isDirectory() === true)
		 console.log("C'est un dossier !");
	 }  
});*/

fs.readFile("test.txt", function (err, data) {
    if (err) { // if error !==null || error !== undifind est ce que la variable contient quelque chose
       console.error(err);
       return;
    }
 
    console.log("Lecture en différé : " + data.toString());
 });