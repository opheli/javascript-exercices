function formatDate(dt) {
    var jours=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    var mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
    var j=dt.getDay();
    var d=dt.getDate();
    if (d==1) {d+="er";}  
    var m=dt.getMonth();
    var y=dt.getFullYear();
    var h=dt.getHours();
    if (h<10) {h = "0" + h}
    var i=dt.getMinutes();
    if (i<10) {i = "0" + i}
    var s=dt.getSeconds();
    if (s<10) {s = "0" + s}
    return jours[j]+" "+d+" "+mois[m]+" "+y+" "+h+":"+i+":"+s;
}
var jour2=new Date(2019, 1, 29);
console.log(formatDate(jour2));