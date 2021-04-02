//Get the container for the user cards
const container = document.querySelector('.card-container');

/*
This function is used to fetch the user data from the API.
Depending on the resolution of the promise, a function will
be called to either display the fetched data or show an error
message for a failed request/rejected promise.
*/
const fetchUser = () => {
    //Free open-source API for generating random user data
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json(); //Parse the response to json
        })
        .then(data => { //This is the parsed data
            const {
                results
            } = data; //Destructure the data into results object

            //We do not need to spread the array index because it is already an object.
            //Just assign the index of the array (the object) to a variable for easy handling.
            // const { ...result} = results[0];
            const result = results[0];

            displayUser(result); //Display the result
        })
        //If theres an error lets catch it
        .catch(err => {
            //We will also pass the 'err' object for debugging purposes.
            displayError(err);
        })
}

/*
This function handles the success request/data from fetchData().
*/
const displayUser = (result) => {

    //Get the data we need by destructuring the result object
    const { picture, name, location, email, phone } = result;

    //Create DOM elements and add properties
    const userImg = document.createElement('img');
    userImg.classList.add('user-image');
    userImg.src = picture.large;

    const userName = document.createElement('h1');
    userName.classList.add('user-name');
    userName.textContent = `${name.first} ${name.last}`;

    const userLocation = document.createElement('span');
    userLocation.classList.add('location');
    userLocation.textContent = `${location.city}, ${location.state}, ${location.country}`;

    const userEmail = document.createElement('span');
    userEmail.classList.add('email');
    userEmail.textContent = email;

    const userPhone = document.createElement('span');
    userPhone.classList.add('phone');
    userPhone.textContent = `Tel: ${phone}`;

    const newUserButton = document.createElement('button');
    newUserButton.type = 'button';
    newUserButton.textContent = 'NEXT';
    newUserButton.classList.add('next-button');
    newUserButton.addEventListener('click', (e) => {
        newFetch(e);
    });

    const rgb = getRGB();
    container.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

    container.append(userImg, userName, userLocation, userEmail, userPhone, newUserButton);
}

const getRGB = () => {
    const rgb = [];
    rgb[0] = Math.round(Math.random() * 255); 
    rgb[1] = Math.round(Math.random() * 255); 
    rgb[2] = Math.round(Math.random() * 255);
    return rgb;
}

/*
This function handles the failed request from fetchData().
*/
const displayError = (err) => {
    const span = document.createElement('span'); //Create a span
    span.textContent = 'An error has occured while fetching data..'; //Add the text
    span.classList.add('error-message'); //Add the class

    container.append(span); //Append the span to the card container
    console.log(err); //Show error in console during development
}


/*
This function handles the request for new user data.
*/
const newFetch = (e) => {

    //Assign the parent node of the event to a variable for easy handling
    const parentNode = e.target.parentNode;
    //While the parentNode has a last child element
    while (parentNode.lastChild) {
        //Remove the child element of the parent node
        parentNode.removeChild(parentNode.lastChild);
    }

    //Fetch new data after clearing the current data
    fetchUser();
}

//When DOM has finished loading run fetchUser().
window.addEventListener('DOMContentLoaded', fetchUser);