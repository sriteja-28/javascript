export function handleSessionStorage() {
    document.getElementById('sesClearStor').addEventListener('click', function () {
        sessionStorage.clear();
        document.getElementById('tableBody').innerHTML = '';
        document.getElementById('outputTable').style.display = 'none';
        alert('Session storage has been cleared.');
    });
}
