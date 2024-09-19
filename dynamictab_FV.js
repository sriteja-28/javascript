document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('container');

    const createElement = (tag, attributes = {}, innerHTML = '') => {
        const element = document.createElement(tag);
        for (let attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
        element.innerHTML = innerHTML;
        return element;
    };

    let header = createElement('header', { class: 'row mb-4' });
    let hdiv = createElement('div', { class: 'col' }, "<h1 class='text-center' style='font-family:Amasis; color: lightblue;'><b>Sample Project</b></h1>");
    header.appendChild(hdiv);
    document.body.appendChild(header);

    let section = createElement('section', { class: 'row mb-4' });
    let navtab = createElement('ul', { class: 'nav nav-tabs' });
    section.appendChild(navtab);
    document.body.appendChild(section);

    let formContainer = createElement('div', { id: 'formContainer', class: 'mt-3 mx-auto' });
    formContainer.style.maxWidth = '600px';
    document.body.appendChild(formContainer);

    let tableContainer = createElement('div', { id: 'tableContainer', class: 'mt-3' });
    document.body.appendChild(tableContainer);

    let navItems = [
        { class: "nav-link", navText: "User Form", href: "#1" },
        { class: "nav-link", navText: "Student Form", href: "#2" }
    ];

    let navLinks = navItems.map(item => {
        let navli = createElement('li', { class: 'nav-item' });
        let navA = createElement('a', { class: item.class, href: item.href }, item.navText);
        navli.appendChild(navA);
        navtab.appendChild(navli);
        return navA;
    });

    let formData = {
        user: {},
        student: {}
    };

    for (let navLink of navLinks) {
        navLink.addEventListener('click', (event) => {
            event.preventDefault();
            for (let link of navLinks) {
                link.classList.remove('active');
            }
            navLink.classList.add('active');

            if (navLink.textContent === 'User Form') {
                createUserForm();
                clearStudentTable();
                tableContainer.style.display = 'block';
            } else if (navLink.textContent === 'Student Form') {
                createStudentForm();
                clearUserTable();
                tableContainer.style.display = 'block';
            }
        });
    }

    // Validation for Username and Student Name
    let validateNameField = (inputElement, errorMessage) => {
        let value = inputElement.value.trim();
        if (value === '') {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'This field is required.';
            return false;
        } else if (value.length < 6) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'Must be at least 6 characters.';
            return false;
        } else if (value.length > 25) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'Cannot exceed 25 characters.';
            return false;
         }
         // else if (!/^[a-zA-Z\s]*$/.test(value)) {
        //     inputElement.classList.add('is-invalid');
        //     inputElement.classList.remove('is-valid');
        //     errorMessage.textContent = 'Only letters and spaces are allowed.';
        //     return false;
        // } 
        else {
            inputElement.classList.add('is-valid');
            inputElement.classList.remove('is-invalid');
            errorMessage.textContent = '';
            return true;
        }
    };

    // Validation for Total Marks
    let validateTotalMarksField = (inputElement, errorMessage) => {
        let value = inputElement.value.trim();
        if (value === '') {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'This field is required.';
            return false;
        } else if (isNaN(value) || value < 0 || value > 100) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'Marks should be between 0 and 100.';
            return false;
        } else {
            inputElement.classList.add('is-valid');
            inputElement.classList.remove('is-invalid');
            errorMessage.textContent = '';
            return true;
        }
    };

    let createUserForm = () => {
        formContainer.innerHTML = '';

        let userForm = createElement('form', { class: 'form-group' });

        let fields = [
            { label: 'User Name:', type: 'text', name: 'userName', value: formData.user.userName || '', required: true },
            { label: 'User Age:', type: 'number', name: 'userAge', value: formData.user.userAge || '', min: 1, max: 120, required: true },
            { label: 'User Email:', type: 'email', name: 'userEmail', value: formData.user.userEmail || '', required: true }
        ];

        for (let field of fields) {
            let labelElement = createElement('label', {}, field.label);
            let inputElement = createElement('input', { type: field.type, name: field.name, class: 'form-control mb-2', value: field.value, ...field });
            let errorMessage = createElement('div', { class: 'invalid-feedback', style: 'color: red;' });

            inputElement.addEventListener('input', () => {

                if (field.name === 'userAge') {
                    validateAge(inputElement, errorMessage);
                } else if(field.name === 'userEmail'){
                    validateEmail(inputElement, errorMessage);
                }else{
                    validateNameField(inputElement,errorMessage)
                }
            });

            userForm.appendChild(labelElement);
            userForm.appendChild(inputElement);
            userForm.appendChild(errorMessage);
        }

        let submitButton = createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Submit');
        userForm.appendChild(submitButton);

        userForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;
            isValid = validateNameField(userForm.userName, userForm.userName.nextElementSibling) && isValid;
            isValid = validateTotalMarksField(userForm.userAge, userForm.userAge.nextElementSibling) && isValid; // Assuming userAge validation
            // Add additional validations for other fields if needed
            if (isValid) {
                formData.user = {
                    userName: userForm.userName.value,
                    userAge: userForm.userAge.value,
                    userEmail: userForm.userEmail.value
                };
                addToTable('userTable', [
                    { "User Name": formData.user.userName, "User Age": formData.user.userAge, "User Email": formData.user.userEmail }
                ]);
                userForm.reset();
                userForm.userName.focus();
            }
        });

        formContainer.appendChild(userForm);
    };

    let createStudentForm = () => {
        formContainer.innerHTML = '';

        let studentForm = createElement('form', { class: 'form-group' });

        let fields = [
            { label: 'Student Name:', type: 'text', name: 'studentName', value: formData.student.studentName || '', required: true },
            { label: 'Student Age:', type: 'number', name: 'studentAge', value: formData.student.studentAge || '', min: 1, max: 120, required: true },
            { label: 'Student Email:', type: 'email', name: 'studentEmail', value: formData.student.studentEmail || '', required: true },
            { label: 'Total Marks:', type: 'number', name: 'totalMarks', value: formData.student.totalMarks || '', min: 0, max: 100, required: true }
        ];

        for (let field of fields) {
            let labelElement = createElement('label', {}, field.label);
            let inputElement = createElement('input', { type: field.type, name: field.name, class: 'form-control mb-2', value: field.value, ...field });
            let errorMessage = createElement('div', { class: 'invalid-feedback', style: 'color: red;' });

            inputElement.addEventListener('input', () => {
                if (field.name === 'studentAge') {
                    validateAge(inputElement, errorMessage);
                } else if (field.name === 'studentEmail') {
                    validateEmail(inputElement, errorMessage);
                } else if (field.name === 'totalMarks') {
                    validateTotalMarksField(inputElement, errorMessage);
                } else {
                    validateNameField(inputElement, errorMessage);
                }
            });

            studentForm.appendChild(labelElement);
            studentForm.appendChild(inputElement);
            studentForm.appendChild(errorMessage);
        }

        let submitButton = createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Submit');
        studentForm.appendChild(submitButton);

        studentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isValid = true;
            isValid = validateNameField(studentForm.studentName, studentForm.studentName.nextElementSibling) && isValid;
            isValid = validateAge(studentForm.studentAge, studentForm.studentAge.nextElementSibling) && isValid;
            isValid = validateEmail(studentForm.studentEmail, studentForm.studentEmail.nextElementSibling) && isValid;
            isValid = validateTotalMarksField(studentForm.totalMarks, studentForm.totalMarks.nextElementSibling) && isValid;
            // Add additional validations for other fields if needed
            if (isValid) {
                formData.student = {
                    studentName: studentForm.studentName.value,
                    studentAge: studentForm.studentAge.value,
                    studentEmail: studentForm.studentEmail.value,
                    totalMarks: studentForm.totalMarks.value
                };
                addToTable('studentTable', [
                    { "Student Name": formData.student.studentName, "Student Age": formData.student.studentAge, "Student Email": formData.student.studentEmail, "Total Marks": formData.student.totalMarks }
                ]);
                studentForm.reset();
                studentForm.studentName.focus();
            }
        });

        formContainer.appendChild(studentForm);
    };

    let addToTable = (tableId, data) => {
        let table = document.getElementById(tableId);
        if (!table) {
            table = createElement('table', { id: tableId, class: 'table table-striped' });
            let thead = createElement('thead');
            let tbody = createElement('tbody');
            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer.appendChild(table);
        }

        let thead = table.querySelector('thead');
        if (!thead.querySelector('tr')) {
            let headerRow = createElement('tr');
            let headers = Object.keys(data[0]);
            for (let header of headers) {
                let th = createElement('th', {}, header);
                headerRow.appendChild(th);
            }
            thead.appendChild(headerRow);
        }

        let tbody = table.querySelector('tbody');
        for (let rowData of data) {
            let row = createElement('tr');
            for (let key in rowData) {
                let td = createElement('td', {}, rowData[key]);
                row.appendChild(td);
            }
            tbody.appendChild(row);
        }
    };

    let clearUserTable = () => {
        let userTable = document.getElementById('userTable');
        if (userTable) {
            userTable.remove();
        }
    };

    let clearStudentTable = () => {
        let studentTable = document.getElementById('studentTable');
        if (studentTable) {
            studentTable.remove();
        }
    };

    let validateAge = (inputElement, errorMessage) => {
        let value = inputElement.value.trim();
        if (value === '') {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'This field is required.';
            return false;
        } else if (isNaN(value) || value < 1 || value > 120) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'Age must be between 1 and 120.';
            return false;
        } else {
            inputElement.classList.add('is-valid');
            inputElement.classList.remove('is-invalid');
            errorMessage.textContent = '';
            return true;
        }
    };

    let validateEmail = (inputElement, errorMessage) => {
        let value = inputElement.value.trim();
        if (value === '') {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'This field is required.';
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            inputElement.classList.add('is-invalid');
            inputElement.classList.remove('is-valid');
            errorMessage.textContent = 'Invalid email format.';
            return false;
        } else {
            inputElement.classList.add('is-valid');
            inputElement.classList.remove('is-invalid');
            errorMessage.textContent = '';
            return true;
        }
    };
});
