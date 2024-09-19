import { handleLocalStorage } from './Stor_Local.js';
import { handleSessionStorage } from './Stor_Session.js';

// Form validation logic
function validateForm(studentName, dob, gender, course, address, terms) {
    var valid = true;

    document.getElementById('nameError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('genderError').innerText = '';
    document.getElementById('courseError').innerText = '';
    document.getElementById('addressError').innerText = '';

    if (studentName === '' || studentName.length < 6 || studentName.length > 25) {
        document.getElementById('nameError').innerText = 'Name must be between 6 and 25 characters.';
        valid = false;
    }

    if (dob === '') {
        document.getElementById('dobError').innerText = 'Date of Birth is required.';
        valid = false;
    }

    if (!gender) {
        document.getElementById('genderError').innerText = 'Please select a gender.';
        valid = false;
    }

    if (course === '') {
        document.getElementById('courseError').innerText = 'Please select a course.';
        valid = false;
    }

    if (address === '' || address.length < 10 || address.length > 50) {
        document.getElementById('addressError').innerText = 'Address must be between 10 and 50 characters.';
        valid = false;
    }

    if (!terms) {
        alert('You must accept the terms and conditions.');
        valid = false;
    }

    return valid;
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('studentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var studentName = document.getElementById('studentName').value.trim();
        var dob = document.getElementById('dob').value.trim();
        var gender = document.querySelector('input[name="gender"]:checked');
        var course = document.getElementById('course').value;
        var address = document.getElementById('address').value.trim();
        var terms = document.getElementById('terms').checked;

        var valid = validateForm(studentName, dob, gender, course, address, terms);

        if (valid) {
            // Use localStorage to store student data
            handleLocalStorage(studentName, dob, gender, course, address);
        }
    });

    // Handle local and session storage events
    handleLocalStorage();
    handleSessionStorage();
});
