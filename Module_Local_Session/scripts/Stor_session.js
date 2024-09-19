const displayStudentData = () => {
    document.getElementById('tableBody').innerHTML = '';
    let storedData = sessionStorage.getItem('studentData');
    if (storedData) {
        let student = JSON.parse(storedData);
        let newRow = document.createElement('tr');
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
};

export const handleSessionStorage = (studentName = null, dob = null, gender = null, course = null, address = null) => {
    if (studentName && dob && gender && course && address) {
        let studentData = {
            name: studentName,
            dob: dob,
            gender: gender ? gender.value : 'Not specified',
            course: course,
            address: address
        };

        sessionStorage.setItem('studentData', JSON.stringify(studentData));
        displayStudentData();
    }

    document.getElementById('sesClearStor').addEventListener('click', () => {
        sessionStorage.clear();
        document.getElementById('tableBody').innerHTML = '';
        document.getElementById('outputTable').style.display = 'none';
        alert('Session storage has been cleared.');
    });
};
