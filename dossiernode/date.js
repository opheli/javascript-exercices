// 01 Format

console.log('exo01');

function formatDate(date) {

    let dateF = new Date(date);
    console.log(dateF.getDate() + '/' + dateF.getMonth()+1 + '/' + dateF.getFullYear());

}
formatDate('1995-01-22');
//console.log(nowTest.toLocaleString());



// 02 Age

// avant que tu demandes c'est internet et elle fonctionne avant 1970


console.log('exo02');


function calculateAge(birthday)
{
  birthday = new Date(birthday);
  return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}

console.log(calculateAge("3 January 1969"));



// 03 Validator


console.log('exo03');

var prompt = require("prompt");

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get(["username", "email"],

function  checkProfile(err, res) {  // demande à obtenir les propriétés "username" et "email"
    
  if ("username" !== /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm) {
		return onErr(error);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
  console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
});
