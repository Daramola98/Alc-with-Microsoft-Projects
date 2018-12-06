const searchBtn = document.querySelector('#searchbtn');

searchBtn.addEventListener('click', search, false);

function search(){
    const queryURL = "https://jsonplaceholder.typicode.com/users";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', queryURL, true);
    xhr.onload = function(e){
        let jsonResponse = xhr.response;
        let users = JSON.parse(jsonResponse);
        displayUsersAsTable(users);
    }
    xhr.onerror = function(err){
        console.log("Error::" + err);
    }

    xhr.send();
}

function displayUsersAsTable(users){
    let usersDiv = document.querySelector('#users');
    usersDiv.innerHTML="";
    let table = document.createElement('table');
    table.createCaption();
    table.caption.innerText="REST API PRACTICE";

    users.forEach(function(currentUser){
        let row = table.insertRow();
        let nameCell = row.insertCell();
        nameCell.innerHTML = currentUser.name;
        let emailCell = row.insertCell();
        emailCell.innerHTML = currentUser.email;
        let addressCell = row.insertCell();
        addressCell.innerHTML = currentUser.address.street;
        let phoneCell = row.insertCell();
        phoneCell.innerHTML = currentUser.phone;
        let websiteCell = row.insertCell();
        websiteCell.innerHTML = currentUser.website;
        let companyCell = row.insertCell();
        companyCell.innerHTML = currentUser.company.name;
    });

    usersDiv.appendChild(table);
}

/*
function search() {
    var queryURL = "https://jsonplaceholder.typicode.com/users";

    fetch(queryURL)
            .then(function (response) {
                // response.json() returns a json string,
                // returning it will convert it 
                // to a pure JavaScript 
                // object for the next then's callback
                return response.json();
            })
            .then(function (users) {
                // users is a JavaScript object here
                displayUsersAsATable(users);
            })
            .catch(function (error) {
                console.log('Error during fetch: ' + error.message);
            });
}
*/