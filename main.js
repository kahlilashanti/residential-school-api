
document.getElementById('getSchools').addEventListener('click', getSchools);

function getSchools() {
    fetch('schools.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}