export function handleLocalStorage(studentName = null, dob = null, gender = null, course = null, address = null) {
    if (studentName && dob && gender && course && address) {
        var studentData = {
            name: studentName,
            dob: dob,
            gender: gender ? gender.value : 'Not specified',
            course: course,
            address: address
        };

        localStorage.setItem('studentData', JSON.stringify(studentData));
        displayStudentData();
        document.getElementById('studentForm').reset();
    } else {
        displayStudentData();
    }

    document.getElementById('locClearStor').addEventListener('click', function () {
        localStorage.clear();
        document.getElementById('tableBody').innerHTML = '';
        document.getElementById('outputTable').style.display = 'none';
        alert('Local storage has been cleared.');
    });

    function displayStudentData() {
        document.getElementById('tableBody').innerHTML = '';
        var storedData = localStorage.getItem('studentData');
        if (storedData) {
            var student = JSON.parse(storedData);
            var newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>${student.gender}</td>
                <td>${student.course}</td>
                <td>${student.address}</td>
            `;
            document.getElementById('tableBody').appendChild(newRow);
            document.getElementById('outputTable').style.display = 'table';
        }
    }
}
