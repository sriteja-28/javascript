var ename="teja";
var eworkingdays=5;
var eannualsal=200000;
var monthlysal=eannualsal/12;
var year=2000;
var noofdays=0;
var daysal=0;
var leap= (year%4==0 && !(year%100==0) || year%400==0)
if(leap){
    noofdays=366;
    daysal=eannualsal/366;
}
else{
    noofdays=365;
    daysal=eannualsal/365;
}
console.log(noofdays);
console.log("per month salary: ",monthlysal);
console.log("per days salary:",daysal);


var noofdaysworksal=eworkingdays*daysal;
console.log("no of days working salary :",noofdaysworksal);
console.log("The salary of",ename,"for working",eworkingdays,"days chris:",noofdaysworksal);