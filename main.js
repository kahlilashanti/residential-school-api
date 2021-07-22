
// document.getElementById('getSchools').addEventListener('click', getSchools);
document.getElementById('getAPI').addEventListener('click', getAPI);

function getSchools() {
    fetch('schools.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
}

function getAPI() {
    fetch('https://trc-residential-api.herokuapp.com/res-schools')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            let output = '<h2>Residential Schools</h2>';
            data.forEach(function (res_schools) {
                output += `
                <ul>
                    <li>Name: ${res_schools.name}</li>
                    <li>Name: ${res_schools.city}</li>
                </ul>
                
                
                `

            })
        })
}