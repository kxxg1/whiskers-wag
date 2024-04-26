//Fetch sync and async function with error handling + render to DOM//

let endpoint = 'https://onlineprojectsgit.github.io/API/WDEndpoint.json'

let usersArr = []
function syncFunction() {
    fetch('https://onlineprojectsgit.github.io/API/WDEndpoint.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let learners = data.info.learners;
        document.getElementById('learners').innerHTML = learners.join(', ');
        document.getElementById('selectedLearners').innerHTML = [learners[6], learners[7], learners[16]].join(', ');
    })
    .catch(error => console.log('There was a problem with the fetch operation: ' + error.message));
}
syncFunction();

async function asyncFunction(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let learners = data.info.learners;
        let selectedLearners = [learners[6], learners[7], learners[16]].join(', ');
        let cohort = data.info.cohort;
        let instructor = data.info.instructor.name;

        // Log to console
        console.log('Selected Learners:', selectedLearners);
        console.log('Cohort:', cohort);
        console.log('Instructor:', instructor);

        // Render to DOM
        document.getElementById('cohort').innerHTML = cohort;
        document.getElementById('instructor').innerHTML = instructor;
        document.getElementById('selectedLearners').innerHTML = selectedLearners;
    } catch (error) {
        console.log('There was a problem with the fetch operation: ' + error.message);
    }
}
asyncFunction(endpoint);





