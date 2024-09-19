document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;
    body.setAttribute("class", "container");

    var header = document.createElement("header");
    header.setAttribute("class", "row mb-4");
    var hdiv = document.createElement("div");
    hdiv.setAttribute("class", "col");
    hdiv.innerHTML = "<h1 class='text-center' style='font-family:Amasis; color: lightblue;'><b>Sample Project D-13</b></h1>";
    header.appendChild(hdiv);
    body.appendChild(header);

    var section = document.createElement("section");
    section.setAttribute("class", "row mb-4");
    var navtab = document.createElement("ul");
    navtab.setAttribute("class", "nav nav-tabs");
    section.appendChild(navtab);
    body.appendChild(section);

    var formContainer = document.createElement("div");
    formContainer.setAttribute("id", "formContainer");
    formContainer.setAttribute("class", "mt-3 mx-auto");
    formContainer.style.maxWidth = '600px'; // Restrict form width
    body.appendChild(formContainer);

    var tableContainer = document.createElement("div");
    tableContainer.setAttribute("id", "tableContainer");
    tableContainer.setAttribute("class", "mt-3");
    body.appendChild(tableContainer);

    // Define navigation items
    var navItems = [
        {
            class: "nav-link",
            navText: "User Form",
            href: "#1"
        },
        {
            class: "nav-link",
            navText: "Student Form",
            href: "#2"
        }
    ];

    // Create navigation items dynamically
    var navLinks = [];
    for (var i = 0; i < navItems.length; i++) {
        var navli = document.createElement("li");
        navli.setAttribute("class", "nav-item");

        var navA = document.createElement("a");
        navA.setAttribute("class", navItems[i].class);
        navA.setAttribute("href", navItems[i].href);
        navA.innerText = navItems[i].navText;
        navli.appendChild(navA);
        navtab.appendChild(navli);

        navLinks.push(navA);
    }

    // Form data storage
    var formData = {
        user: {},
        student: {}
    };

    // Handle click events to toggle active state and show the corresponding form
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (event) {
            event.preventDefault();
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            if (this.textContent === 'User Form') {
                userForm();
                clearStudentTable();
            } else if (this.textContent === 'Student Form') {
                studentForm();
                clearUserTable();
            }
        });
    });

    // Create User Form
    function userForm() {
        formContainer.innerHTML = '';

        // Create form element

        var userForm = document.createElement('form');
        userForm.setAttribute("class", "form-group");


        //         <div class="input-group">
        //   <span class="input-group-text">First and last name</span>
        //   <input type="text" aria-label="First name" class="form-control">
        //   <input type="text" aria-label="Last name" class="form-control">
        // </div>
        // var inpGrpDiv = document.createElement("div");
        // var fnameSpan = document.createElement("span");



        var userNameLabel = document.createElement('label');
        userNameLabel.textContent = 'User Name:';
        userForm.appendChild(userNameLabel);

        var userNameInput = document.createElement('input');
        userNameInput.type = 'text';
        userNameInput.name = 'userName';
        userNameInput.setAttribute("class", "form-control mb-2");
        userNameInput.value = formData.user.userName || ''; // Populate with saved data


        userForm.appendChild(userNameInput);

        var userAgeLabel = document.createElement('label');
        userAgeLabel.textContent = 'User Age:';
        userForm.appendChild(userAgeLabel);

        var userAgeInput = document.createElement('input');
        userAgeInput.type = 'number';
        userAgeInput.name = 'userAge';
        userAgeInput.setAttribute("class", "form-control mb-2");
        userAgeInput.value = formData.user.userAge || ''; // Populate with saved data
        userForm.appendChild(userAgeInput);

        var userEmailLabel = document.createElement('label');
        userEmailLabel.textContent = 'User Email:';
        userForm.appendChild(userEmailLabel);

        var userEmailInput = document.createElement('input');
        userEmailInput.type = 'email';
        userEmailInput.name = 'userEmail';
        userEmailInput.setAttribute("class", "form-control mb-2");
        userEmailInput.value = formData.user.userEmail || ''; // Populate with saved data
        userForm.appendChild(userEmailInput);

        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'submit';
        submitButton.setAttribute("class", "btn btn-primary");
        userForm.appendChild(submitButton);

        userForm.addEventListener('submit', function (event) {
            event.preventDefault();
            formData.user = {
                userName: userNameInput.value,
                userAge: userAgeInput.value,
                userEmail: userEmailInput.value
            };
            addUserToTable([{
                "User Name": formData.user.userName,
                "User Age": formData.user.userAge,
                "User Email": formData.user.userEmail
            }]);

            // Clear form fields and focus on the first input
            userNameInput.value = '';
            userAgeInput.value = '';
            userEmailInput.value = '';
            userNameInput.focus();
        });

        formContainer.appendChild(userForm);
    }

    // Create Student Form
    function studentForm() {
        formContainer.innerHTML = '';

        var studentForm = document.createElement('form');
        studentForm.setAttribute("class", "form-group");

        var studentNameLabel = document.createElement('label');
        studentNameLabel.textContent = 'Student Name:';
        studentForm.appendChild(studentNameLabel);

        var studentNameInput = document.createElement('input');
        studentNameInput.type = 'text';
        studentNameInput.name = 'studentName';
        studentNameInput.setAttribute("class", "form-control mb-2");
        studentNameInput.value = formData.student.studentName || ''; // Populate with saved data
        studentForm.appendChild(studentNameInput);

        var studentDOBLabel = document.createElement('label');
        studentDOBLabel.textContent = 'Student DOB:';
        studentForm.appendChild(studentDOBLabel);

        var studentDOBInput = document.createElement('input');
        studentDOBInput.type = 'date';
        studentDOBInput.name = 'studentDOB';
        studentDOBInput.setAttribute("class", "form-control mb-2");
        studentDOBInput.value = formData.student.studentDOB || ''; // Populate with saved data
        studentForm.appendChild(studentDOBInput);

        var studentTotalLabel = document.createElement('label');
        studentTotalLabel.textContent = 'Student Total:';
        studentForm.appendChild(studentTotalLabel);

        var studentTotalInput = document.createElement('input');
        studentTotalInput.type = 'number';
        studentTotalInput.name = 'studentTotal';
        studentTotalInput.setAttribute("class", "form-control mb-2");
        studentTotalInput.value = formData.student.studentTotal || ''; // Populate with saved data
        studentForm.appendChild(studentTotalInput);

        var studentCourseLabel = document.createElement('label');
        studentCourseLabel.textContent = 'Student Course:';
        studentForm.appendChild(studentCourseLabel);

        var studentCourseSelect = document.createElement('select');
        studentCourseSelect.name = 'studentCourse';
        studentCourseSelect.setAttribute("class", "form-control mb-2");
        var courses = [" ", "Mathematics", "Science", "History", "Art"];
        courses.forEach(course => {
            var option = document.createElement('option');
            option.value = course;
            option.textContent = course;
            if (formData.student.studentCourse === course) {
                option.selected = true; // Select saved course
            }
            studentCourseSelect.appendChild(option);
        });
        studentForm.appendChild(studentCourseSelect);

        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'submit';
        submitButton.setAttribute("class", "btn btn-primary");
        studentForm.appendChild(submitButton);

        studentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            formData.student = {
                studentName: studentNameInput.value,
                studentDOB: studentDOBInput.value,
                studentTotal: studentTotalInput.value,
                studentCourse: studentCourseSelect.value
            };
            addStudentToTable([{
                "Student Name": formData.student.studentName,
                "Student DOB": formData.student.studentDOB,
                "Student Total": formData.student.studentTotal,
                "Student Course": formData.student.studentCourse
            }]);

            // Clear form fields and focus on the first input
            studentNameInput.value = '';
            studentDOBInput.value = '';
            studentTotalInput.value = '';
            studentCourseSelect.value = '';
            studentNameInput.focus();
        });

        formContainer.appendChild(studentForm);
    }

    // Function to add user data to the table
    function addUserToTable(newData) {
        var userTable = document.querySelector('#userTable');
        var tableBody;

        if (userTable) {
            tableBody = userTable.querySelector('tbody');
        } else {
            userTable = document.createElement('table');
            userTable.setAttribute('id', 'userTable');
            userTable.setAttribute('class', 'table table-bordered mt-3');
            userTable.style.width = '100%';

            var thead = document.createElement('thead');
            var headerRow = document.createElement('tr');
            Object.keys(newData[0]).forEach(key => {
                var th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            userTable.appendChild(thead);

            tableBody = document.createElement('tbody');
            userTable.appendChild(tableBody);

            tableContainer.appendChild(userTable);
        }

        newData.forEach(item => {
            var row = document.createElement('tr');
            Object.values(item).forEach(value => {
                var td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });

        // Remove "No Content" message if it exists
        var noContentMessage = tableContainer.querySelector('p.text-center');
        if (noContentMessage) {
            noContentMessage.remove();
        }
    }

    // Function to add student data to the table
    function addStudentToTable(newData) {
        var studentTable = document.querySelector('#studentTable');
        var tableBody;

        if (studentTable) {
            tableBody = studentTable.querySelector('tbody');
        } else {
            studentTable = document.createElement('table');
            studentTable.setAttribute('id', 'studentTable');
            studentTable.setAttribute('class', 'table table-bordered mt-3');
            studentTable.style.width = '100%';

            var thead = document.createElement('thead');
            var headerRow = document.createElement('tr');
            Object.keys(newData[0]).forEach(key => {
                var th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            studentTable.appendChild(thead);

            tableBody = document.createElement('tbody');
            studentTable.appendChild(tableBody);

            tableContainer.appendChild(studentTable);
        }

        newData.forEach(item => {
            var row = document.createElement('tr');
            Object.values(item).forEach(value => {
                var td = document.createElement('td');
                td.textContent = value;
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });

        // Remove "No Content" message if it exists
        var noContentMessage = tableContainer.querySelector('p.text-center');
        if (noContentMessage) {
            noContentMessage.remove();
        }
    }

    // Clear user table
    function clearUserTable() {
        var userTable = document.querySelector('#userTable');
        if (userTable) {
            userTable.remove();
        }

        // Show "No Content" message if no other content is present
        if (!tableContainer.querySelector('table')) {
            tableContainer.innerHTML = '<p class="text-center">No Content</p>';
        }
    }

    // Clear student table
    function clearStudentTable() {
        var studentTable = document.querySelector('#studentTable');
        if (studentTable) {
            studentTable.remove();
        }

        // Show "No Content" message if no other content is present
        if (!tableContainer.querySelector('table')) {
            tableContainer.innerHTML = '<p class="text-center">No Content</p>';
        }
    }
});
