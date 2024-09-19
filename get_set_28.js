class Student {
    constructor(fname, lname, dob, marks) {
        this.fname = fname;
        this.lname = lname;
        this.dob = dob;
        this.marks = marks;
    }

    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    get age() {
        const birthDate = new Date(this.dob);
        //console.log(birthDate);
        const diff = Date.now() - birthDate.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // execution of age
    // new Date('2003-03-28');
    // Fri Mar 28 2003 05:30:00 GMT+0530 (India Standard Time)
    // new Date('2003-03-28').getTime();
    // 1048809600000
    // Date.now()
    // 1724926028644
    // 1724926028644-1048809600000
    // 676116428644
    // new Date(676116428644);
    // Wed Jun 05 1991 15:37:08 GMT+0530 (India Standard Time)
    // Math.abs(new Date(676116428644).getUTCFullYear() - 1970);
    // 21

    get totalMarks() {
        return this.marks.reduce((sum, mark) => sum + parseInt(mark), 0);
    }

    get averageMarks() {
        return this.totalMarks / this.marks.length;
    }

    get result() {
        return this.marks.every(mark => mark >= 35) ? 'Pass' : 'Fail';
    }
}

// Variable to keep track of the serial number
let sno = 0;
document.getElementById('fName').focus();

document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const fname = document.getElementById('fName').value.trim();
    const lname = document.getElementById('lName').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const marks = Array.from(document.querySelectorAll('.mar')).map(input => input.value.trim());

    // Validation flags
    let valid = true;

    // Clear previous error messages and styles
    document.getElementById('fError').innerText = '';
    document.getElementById('lError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('markError').innerText = '';

    document.getElementById('fName').classList.remove('is-invalid', 'is-valid');
    document.getElementById('lName').classList.remove('is-invalid', 'is-valid');
    document.getElementById('dob').classList.remove('is-invalid', 'is-valid');
    document.querySelectorAll('.mar').forEach(input => input.classList.remove('is-invalid', 'is-valid'));

    // Name validation for fname
    if (fname === '') {
        document.getElementById('fError').innerText = 'Please enter the first name.';
        document.getElementById('fName').classList.add('is-invalid');
        valid = false;
    } else if (fname.length < 3 || fname.length > 10) {
        document.getElementById('fError').innerText = 'Name must be between 3 and 10 characters.';
        document.getElementById('fName').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('fName').classList.add('is-valid');
    }

    // Name validation for lname
    if (lname === '') {
        document.getElementById('lError').innerText = 'Please enter the last name.';
        document.getElementById('lName').classList.add('is-invalid');
        valid = false;
    } else if (lname.length < 3 || lname.length > 10) {
        document.getElementById('lError').innerText = 'Name must be between 3 and 10 characters.';
        document.getElementById('lName').classList.add('is-invalid');
        valid = false;
    } else {
        document.getElementById('lName').classList.add('is-valid');
    }

    // Date of Birth validation
    if (dob === '') {
        document.getElementById('dobError').innerText = 'Date of Birth is required.';
        document.getElementById('dob').classList.add('is-invalid');
        valid = false;
    } else {
        const currentYear = new Date().getFullYear();
        const dobYear = new Date(dob).getFullYear();
        if (dobYear > currentYear) {
            dobError.innerText = 'Date of Birth cannot be in the future.';
            dobInput.classList.add('is-invalid');
            dobInput.classList.remove('is-valid');
            valid = false;
        } else {
            document.getElementById('dob').classList.add('is-valid');
        }
    }


    // Marks validation
    let allMarksFilled = marks.every(mark => mark !== '');
    let marksInRange = marks.every(mark => mark >= 1 && mark <= 100);

    if (!allMarksFilled) {
        document.getElementById('markError').innerText = 'All marks fields are required.';
        document.querySelectorAll('.mar').forEach(input => input.classList.add('is-invalid'));
        valid = false;
    } else if (!marksInRange) {
        document.getElementById('markError').innerText = 'Marks must be between 1 and 100.';
        document.querySelectorAll('.mar').forEach(input => input.classList.add('is-invalid'));
        valid = false;
    } else {
        document.querySelectorAll('.mar').forEach(input => input.classList.add('is-valid'));
    }

    if (valid) {
        // Create a new Student instance
        const student = new Student(fname, lname, dob, marks);
        sno++;
        // Prepare new row
        const newRow = document.createElement('tr');

        //sno cell in each row
        const snoTd = document.createElement('td');
        snoTd.setAttribute('class', 'text-center');
        snoTd.innerText = sno; // Set the serial number
        newRow.appendChild(snoTd);

        newRow.innerHTML = `
            <td>${sno}</td>
            <td>${student.fullName}</td>
            <td>${student.age} years</td>
            <td>${student.totalMarks}</td>
            <td>${student.averageMarks}</td>
            <td>${student.result}</td>
        `;

        // Append the new row to the table body
        const tableBody = document.getElementById('tableBody');
        tableBody.appendChild(newRow);

        // Show the output table
        document.getElementById('outputTable').style.display = 'table';

        // Clear all input fields
        document.getElementById('studentForm').reset();

        // Focus back to the student name field
        document.getElementById('fName').focus();
    }
});

// Add event listeners for real-time validation
// document.querySelectorAll('#fName, #lName, #dob, .mar').forEach(input => {
//     input.addEventListener('input', function () {
//         // Re-run validation logic on input change
//         document.getElementById('studentForm').dispatchEvent(new Event('submit', { cancelable: true }));
//     });
// });
