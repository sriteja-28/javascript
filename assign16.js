document.addEventListener('DOMContentLoaded', function () {
    // Focus on the student name field when the page loads
    document.getElementById('studentName').focus();

    // Show initial error for terms and conditions
    var termsErrorShown = false;

    document.getElementById('studentForm').addEventListener('submit', function (e) {
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
            termsErrorShown = true;
        } else {
            termsErrorShown = false;
        }

        if (valid) {
            // Prepare new row
            var newRow = document.createElement('tr');
            newRow.setAttribute("class", "h-10")
            newRow.innerHTML = `
                <td>${studentName}</td>
                <td>${dob}</td>
                <td>${document.getElementById('age').value}</td>
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

    // Real-time validation as the user types or changes inputs
    document.getElementById('studentName').addEventListener('input', function () {
        if (this.value.trim().length < 6) {
            this.classList.add('is-invalid');
            document.getElementById('nameError').innerText = 'Name must be at least 6 characters.';
        }
        else if (this.value.trim().length > 25) {
            this.classList.add('is-invalid');
            document.getElementById('nameError').innerText = 'Name should not exceed 25 characters.';
        }
        else {
            this.classList.remove('is-invalid');
            document.getElementById('nameError').innerText = '';
        }
    });

    document.getElementById('dob').addEventListener('input', function () {
        if (this.value.trim() === '') {
            this.classList.add('is-invalid');
            document.getElementById('dobError').innerText = 'Date of Birth is required.';
        } else {
            this.classList.remove('is-invalid');
            document.getElementById('dobError').innerText = '';
        }
    });

    document.getElementById('address').addEventListener('input', function () {
        if (this.value.trim().length < 40 || this.value.trim().length > 150) {
            this.classList.add('is-invalid');
            document.getElementById('addressError').innerText = 'Address must be between 40 and 150 characters.';
        } else {
            this.classList.remove('is-invalid');
            document.getElementById('addressError').innerText = '';
        }
    });

    document.querySelectorAll('input[name="gender"]').forEach(genderInput => {
        genderInput.addEventListener('change', function () {
            document.getElementById('genderError').innerText = '';
        });
    });

    document.getElementById('course').addEventListener('change', function () {
        if (this.value === '') {
            this.classList.add('is-invalid');
            document.getElementById('courseError').innerText = 'Please select a course.';
        } else {
            this.classList.remove('is-invalid');
            document.getElementById('courseError').innerText = '';
        }
    });

    // Add event listener to the date of birth field to calculate age
    document.getElementById('dob').addEventListener('change', function () {
        var dob = new Date(this.value);
        var today = new Date();

        // Calculate the difference in years
        var ageYears = today.getFullYear() - dob.getFullYear();

        // Calculate the difference in months
        var ageMonths = today.getMonth() - dob.getMonth();

        // Adjust if the current month is before the birth month or
        // if it's the same month but the current day is before the birth day
        if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < dob.getDate())) {
            ageYears--;
            ageMonths = (ageMonths + 12) % 12;
        }

        // Calculate the difference in days
        var dayDiff = today.getDate() - dob.getDate();
        if (dayDiff < 0) {
            ageMonths--;
            if (ageMonths < 0) {
                ageMonths = 11;
                ageYears--;
            }
        }

        // Update the age input field with years and months
        document.getElementById('age').value = `${ageYears}.${ageMonths}`;
    });
});
