// 01 Format

console.log('exo01');

function formatDate(date) {

    let dateF = new Date(date);
    console.log(dateF.getDate() + '/' + dateF.getMonth()+1 + '/' + dateF.getFullYear());

}
formatDate('1995-01-22');
//console.log(nowTest.toLocaleString());


// 02 Age


console.log('exo02');


function calculateAge(birthday)
{
  birthday = new Date(birthday);
  return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}

console.log(calculateAge("3 January 1969"));

