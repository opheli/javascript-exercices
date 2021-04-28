let moment = require('moment');



console.log('Exo01')

let formatDate = moment().format('DD/MM/YYYY');


console.log(formatDate)



console.log('Exo02')

let birthday = moment("19501031", "YYYYMMDD").fromNow();

  
console.log(birthday);




/*function calculateAge(birthday){
    let test=moment(birthday)
     console.log(test.format('DD/MM/YYYY'));
 }
 calculateAge("2000-06-23")*/


/*let formatDate = moment().format('DD/MM/YYYY');


console.log(formatDate)*/