document.getElementById('studentName').focus();

let db;
let isEditing = false;
let editingId = null;
let termsAccepted = false; // Track whether terms have been accepted

const request = indexedDB.open('StudentDB', 1);

request.onerror = function (event) {
    console.log('Error opening IndexedDB:', event.target.errorCode);
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore('students', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('name', 'name', { unique: false });
    objectStore.createIndex('email', 'email', { unique: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    displayStudents();
};

// Form validation and submission
document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Always show validation errors when submitting
    const isValid = validateForm(); // Check if the form is valid

    if (isValid) {
        const terms = document.getElementById('terms').checked;

        if (!terms) {
            alert('You must accept the terms and conditions.');
            return; // Do not proceed if terms are not accepted
        }

        const student = {
            name: document.getElementById('studentName').value.trim(),
            dob: document.getElementById('dob').value.trim(),
            gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified',
            course: document.getElementById('course').value,
            address: document.getElementById('address').value.trim()
        };

        if (isEditing) {
            updateStudent(editingId, student);
        } else {
            addStudent(student);
        }

        clearForm();
    }
});

// Validate form fields and display errors
function validateForm() {
    const studentName = document.getElementById('studentName').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById('course').value;
    const address = document.getElementById('address').value.trim();

    let valid = true;

    clearErrors(); // Clear previous error messages

    // Validation logic
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

    if (dob === '') {
        document.getElementById('dobError').innerText = 'Date of Birth is required.';
        document.getElementById('dob').classList.add('is-invalid');
        valid = false;
    }

    if (!gender) {
        document.getElementById('genderError').innerText = 'Please select a gender.';
        valid = false;
    }

    if (course === '') {
        document.getElementById('courseError').innerText = 'Please select a course.';
        document.getElementById('course').classList.add('is-invalid'); 
        valid = false;
    }

    if (address === '') {
        document.getElementById('addressError').innerText = 'Address is required';
        document.getElementById('address').classList.add('is-invalid');
        valid = false;
    } else if (address.length < 10 || address.length > 50) {
        document.getElementById('addressError').innerText = 'Address must be between 10 and 50 characters';
        document.getElementById('address').classList.add('is-invalid');
        valid = false;
    }

    return valid; // Return the validation result
}

// Clear error messages
function clearErrors() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('genderError').innerText = '';
    document.getElementById('courseError').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('studentName').classList.remove('is-invalid');
    document.getElementById('dob').classList.remove('is-invalid');
    document.getElementById('course').classList.remove('is-invalid');
    document.getElementById('address').classList.remove('is-invalid');
}

// Add student to IndexedDB
function addStudent(student) {
    const transaction = db.transaction(['students'], 'readwrite');
    const objectStore = transaction.objectStore('students');
    const request = objectStore.add(student);

    request.onsuccess = function () {
        displayStudents();
    };

    request.onerror = function (event) {
        console.log('Error adding student:', event.target.errorCode);
    };
}

// Update student in IndexedDB
function updateStudent(id, student) {
    const transaction = db.transaction(['students'], 'readwrite');
    const objectStore = transaction.objectStore('students');
    student.id = id;
    const request = objectStore.put(student);

    request.onsuccess = function () {
        isEditing = false;
        editingId = null;
        displayStudents();
    };

    request.onerror = function (event) {
        console.log('Error updating student:', event.target.errorCode);
    };
}

// Display all students
function displayStudents() {
    const transaction = db.transaction(['students'], 'readonly');
    const objectStore = transaction.objectStore('students');
    const request = objectStore.getAll();

    request.onsuccess = function (event) {
        const students = event.target.result;
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';

        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>${student.gender}</td>
                <td>${student.course}</td>
                <td>${student.address}</td>
                <td>
                    <button onclick="editStudent(${student.id})">Edit</button>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });

        document.getElementById('outputTable').style.display = students.length > 0 ? 'table' : 'none';
    };
}

// Delete student
function deleteStudent(id) {
    const transaction = db.transaction(['students'], 'readwrite');
    const objectStore = transaction.objectStore('students');
    const request = objectStore.delete(id);

    request.onsuccess = function () {
        displayStudents();
    };
}

// Edit student
function editStudent(id) {
    alert("Edit the data on form");
    const transaction = db.transaction(['students'], 'readonly');
    const objectStore = transaction.objectStore('students');
    const request = objectStore.get(id);

    request.onsuccess = function (event) {
        const student = event.target.result;

        document.getElementById('studentName').value = student.name;
        document.getElementById('dob').value = student.dob;
        document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
        document.getElementById('course').value = student.course;
        document.getElementById('address').value = student.address;

        isEditing = true;
        editingId = student.id;
    };
}

// Clear the form
function clearForm() {
    document.getElementById('studentForm').reset();
    document.getElementById('studentName').focus();
    isEditing = false;
    editingId = null;
    termsAccepted = false; // Reset terms acceptance status
}
