// Focus on the student name field when the page loads
document.getElementById('studentName').focus();

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    var studentName = document.getElementById('studentName').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var course = document.getElementById('course').value;
    var address = document.getElementById('address').value.trim();
    var terms = document.getElementById('terms').checked;

    // Validation flags
    var valid = true;
    // Clear previous error messages and styles
    document.getElementById('nameError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('genderError').innerText = ''; 
    document.getElementById('courseError').innerText = ''; 

    document.getElementById('studentName').classList.remove('is-invalid');
    document.getElementById('dob').classList.remove('is-invalid');
    document.getElementById('address').classList.remove('is-invalid');
    document.querySelectorAll('input[name="gender"]').forEach(genderInput => genderInput.classList.remove('is-invalid'));
    document.getElementById('course').classList.remove('is-invalid'); 

    // Name validation
    if (studentName === '') {
        document.getElementById('nameError').innerText = 'Please enter the name.';
        document.getElementById('studentName').classList.add('is-invalid');
        valid = false;
    } else if (studentName.length < 6) {
        document.getElementById('nameError').innerText = 'Name must be at least 6 characters.';
        document.getElementById('studentName').classList.add('is-invalid');
        valid = false;
    } else if (studentName.length > 25) {
        document.getElementById('nameError').innerText = 'Name should not exceed 25 characters.';
        document.getElementById('studentName').classList.add('is-invalid');
        valid = false;
    }

    // Date of Birth validation
    if (dob === '') {
        document.getElementById('dobError').innerText = 'Date of Birth is required.';
        document.getElementById('dob').classList.add('is-invalid');
        valid = false;
    }

    // Address validation
    if (address === '') {
        document.getElementById('addressError').innerText = 'Address is required';
        document.getElementById('address').classList.add('is-invalid');
        valid = false;
    } else if (address.length < 40 || address.length > 150) {
        document.getElementById('addressError').innerText = 'Address must be between 40 and 150 characters';
        document.getElementById('address').classList.add('is-invalid');
        valid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById('genderError').innerText = 'Please select a gender.';
        valid = false;
    }

    // Course validation
    if (course === '') {
        document.getElementById('courseError').innerText = 'Please select a course.';
        document.getElementById('course').classList.add('is-invalid'); 
        valid = false;
    }

    // Terms validation
    if (!terms) {
        alert('You must accept the terms and conditions');
        valid = false;
    }

    if (valid) {
        // Prepare new row
        var newRow = document.createElement('tr');
        newRow.setAttribute("class","h-10")
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>${dob}</td>
            <td>${gender ? gender.value : 'Not specified'}</td>
            <td>${course}</td>
            <td>${address}</td>
        `;

        // Append the new row to the table body
        var tableBody = document.getElementById('tableBody');
        tableBody.appendChild(newRow);

        // Show the output table
        document.getElementById('outputTable').style.display = 'table';

        // Clear all input fields
        document.getElementById('studentForm').reset();

        // Focus back to the student name field
        document.getElementById('studentName').focus();
    }
});
