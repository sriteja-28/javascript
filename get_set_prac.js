class Student {
    constructor(fullname, age, ...marks) {
        this._fullname = fullname; // Private variable for fullname
        this.age = age;             // Assigning the age
        this._marks = marks;        // Private variable for marks array
        this._totalMarks = this.calculateTotalMarks(); // Initial calculation of total marks
        this._avgMarks = this.calculateAvgMarks(); // Initial calculation of average marks
        this._result = this.calculateResult();    // Initial calculation of result
    }

    // Private method to calculate total marks
    calculateTotalMarks() {
        return this._marks.reduce((sum, mark) => sum + mark, 0);
    }

    // Private method to calculate average marks
    calculateAvgMarks() {
        return this._totalMarks / this._marks.length;
    }

    // Private method to calculate result
    calculateResult() {
        return this._avgMarks >= 35 ? "Pass" : "Fail";
    }

    // Getter for fullname
    get fullname() {
        return this._fullname;
    }

    // Setter for fullname
    set fullname(name) {
        this._fullname = name;
    }

    // Getter for marks
    get marks() {
        return this._marks;
    }

    // Setter for marks
    set marks(newMarks) {
        this._marks = newMarks;
        this._totalMarks = this.calculateTotalMarks(); // Recalculate total marks when marks are updated
        this._avgMarks = this.calculateAvgMarks();     // Recalculate average marks when marks are updated
        this._result = this.calculateResult();         // Recalculate result when marks are updated
    }

    // Getter for total marks
    get totalMarks() {
        return this._totalMarks;
    }

    // Setter for total marks
    set totalMarks(newTotal) {
        this._totalMarks = newTotal;
        this._avgMarks = this.calculateAvgMarks();     // Recalculate average marks when total is updated
        this._result = this.calculateResult();         // Recalculate result when total is updated
    }

    // Getter for average marks
    get avgMarks() {
        return this._avgMarks;
    }

    // Setter for average marks
    set avgMarks(newAvg) {
        this._avgMarks = newAvg;
        this._result = this.calculateResult();         // Recalculate result when average is updated
    }

    // Getter for result
    get result() {
        return this._result;
    }

    // Setter for result
    set result(newResult) {
        this._result = newResult;
    }
}

//inputs
const student = new Student("Sri Teja", 20, 30, 40, 50);

console.log("Full Name:", student.fullname);      // Output: Sri Teja
console.log("Total Marks:", student.totalMarks);  // Output: 120
console.log("Average Marks:", student.avgMarks);  // Output: 40
console.log("Result:", student.result);           // Output: Pass

// Modify the fullname using the setter
student.fullname = "Raja Ram"; // New full name

console.log("Updated Full Name:", student.fullname);  // Output: Krishna Mohan



//* Inputs
//?
//!note