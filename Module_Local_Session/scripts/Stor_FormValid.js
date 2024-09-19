import { handleLocalStorage } from './Stor_Local.js';
import { handleSessionStorage } from './Stor_session.js';


// Form validation logic
const validateForm=(studentName, dob, gender, course, address, terms)=> {
    let valid = true;

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
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('studentForm').addEventListener('submit',(e)=> {
        e.preventDefault();

        let studentName = document.getElementById('studentName').value.trim();
        let dob = document.getElementById('dob').value.trim();
        let gender = document.querySelector('input[name="gender"]:checked');
        let course = document.getElementById('course').value;
        let address = document.getElementById('address').value.trim();
        let terms = document.getElementById('terms').checked;

        let valid = validateForm(studentName, dob, gender, course, address, terms);

        if (valid) {
            // Use localStorage to store student data
            handleLocalStorage(studentName, dob, gender, course, address);

            // Use sessionStorage to store student data
            handleSessionStorage(studentName, dob, gender, course, address);
        }
    });

    // Handle local and session storage events
    handleLocalStorage();
    handleSessionStorage();
});


