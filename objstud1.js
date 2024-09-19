// emp monthly sal acc to the working days using object
var empsal={
   eName : "tej",
    eSal :200000,
    eWorkDays :20,
    m :6,
    y :2020

}






// emp monthly sal acc to the working days using constructor

// function Empsal(eName, eSal, eWorkDays, m, y) {
//     this.eName = eName;
//     this.eSal = eSal;
//     this.eWorkDays = eWorkDays;
//     this.m = m;
//     this.y = y;

// }

// Empsal.prototype.getempsal = function () {
//     var e_m_sal = this.eSal / 12;
//     var e_sal = 0;
//     var no_of_days = 0;
//     if (this.m == 1 || this.m == 3 || this.m == 5 || this.m == 7 || this.m == 8 || this.m == 10 || this.m == 12) {
//         no_of_days = 31;
//     }
//     else if (this.m == 2) {
//         if (this.y % 4 == 0 && !(this.y % 100 == 0) || this.y % 400 == 0) {
//             no_of_days = 29;
//         }
//         else {
//             no_of_days = 28;
//         }
//     }
//     else if (this.m == 4 || this.m == 6 || this.m == 9 || this.m == 11) {
//         no_of_days = 30;
//     }

//     var e_day_sal = e_m_sal / no_of_days;
//     e_sal = e_day_sal * this.eWorkDays;


//     return this.eName + " salary of the month " + this.m + " of the year " + this.y + " is " + e_sal;
// }


// var emp1 = new Empsal("krish", 200000, 20, 8, 2024);
// console.log(emp1.getempsal());






//tot marks adn avg using constructor method

// function student(sName, sAge, sMarks) {
//     this.sName = sName;
//     this.sAge = sAge;
//     this.sMarks = sMarks;
// }
// student.prototype.getMarks = function () {

//     return this.sMarks;
// }
// student.prototype.gettot = function () {
//     var tot = 0;
//     for (var i = 0; i < this.sMarks.length; i++) {
//         tot += this.sMarks[i];
//     }
//     return tot;
// }
// student.prototype.getAvg=function(){
//     return stud1.gettot()/this.sMarks.length;
// }
// var stud1 = new student("tej", 21, [20, 30, 40, 50]);
// console.log(stud1.getMarks());
// console.log(stud1.gettot());
// console.log(stud1.getAvg());







//tot marks and avg using object method

// var student = {
//     sName: "teja",
//     sAge: 20,
//     sMarks: [20, 30, 49, 80],
//     totMarks() {
//         var tot = 0;
//         for (var i = 0; i < this.sMarks.length; i++) {
//             tot += this.sMarks[i];
//         }
//         return tot;
//     },

//     average() {
//         return this.totMarks()/ this.sMarks.length;
//     }
// }

// console.log(student.totMarks());
// console.log(student.average());











// var obj={
//     oName:"abc",
//     oAge:23,
//     greet:function(){
//         console.log("hello");
//     }
// }
// obj.greet();