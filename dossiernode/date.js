// 01 Format

console.log('exo01');

function formatDate(date) {

    let dateF = new Date(date);
    console.log(dateF.getDate() + '/' + dateF.getMonth()+1 + '/' + dateF.getFullYear());

}
formatDate('1995-01-22');

