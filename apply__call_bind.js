//closures
//function can access all variables defined inside the function

function myFun1() {
    var a = 4; //a is a local variable
    return a * a;
}
console.log(myFun1());


//function can also access variables defined outside the function

var a = 4;  //a is a global variable. 
function myFun2() {
    return a + a;
}
console.log(myFun2());



//function to increase the counter by global variable

var counter = 0;
function add() { 
  counter += 1; 
}
add(); 
add(); 
add();
console.log(counter);

//function to decrease the counter by local variable
var count2 = 5;
function sub() {
    var count2 =5;
    count2 -= 1;
    // console.log("Inside",count2);
}
sub();
sub();
sub();
console.log(count2);




//apply() method takes arguments as an array
var car = {
    desc: function (model, year) {
        return this.make + " " + this.model + " (" + year + ") - " + model;
    }
}
var myCar = {
    make: "BMW",
    model: "X3"
}
a = car.desc.apply(myCar, ["2024", "SUV"]);
console.log(a);




//call() method takes arguments separately
var car = {
    desc: function (model, year) {
        return this.make + " " + this.model + " (" + year + ") - " + model;
    }
}
var myCar = {
    make: "BMW",
    model: "X3"
}
b = car.desc.call(myCar, "2024", "SUV");
console.log(b);



//bind()
// The bind() method creates a new function 
// that, when called, has its this keyword set to a specific value, 
// and can also be pre-filled with arguments.

var car = {
    desc: function (model, year) {
        return this.make + " " + this.model + " (" + year + ") - " + model;
    }
};
var myCar = {
    make: "BMW",
    model: "X3"
};
c = car.desc.bind(myCar, "2024");
console.log(c("SUV"));







//apply() 
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "sri",
    lastName: "tej",
}
s = person.fullName.apply(person1);
console.log(s);




//call()
var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "venkat",
    lastName: "ravana",
}
m = person.fullName.call(person2);
console.log(m);