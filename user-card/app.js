const getUserData = () => {
        const data = fetch('https://randomuser.me/api/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            const { results } = data;
            //We do not need to spread the array index because it is already an object.
            //Just assign the index of the array (the object) to a variable for easy handling.
            // const { ...result} = results[0];
            const result = results[0];
            return result;
        })
        .catch( err => {
            return `FETCH ERROR IN GETUSERDATA(): ${err}`;
        })
        return data;
}

const displayUser = () => {
    const fetchData = getUserData();
    // console.log(fetchData);
    fetchData.then( data => {
        console.log(data);
        
        const { picture, name, location, email, phone } = data;

        const userImg = document.querySelector('.user-image');
        const userName = document.querySelector('.user-name');
        const userLocation = document.querySelector('.location');
        const userEmail = document.querySelector('.email');
        const userPhone = document.querySelector('.phone');
        
        userImg.src = picture.large;
        
        userName.textContent = `${name.first} ${name.last}`;

        userLocation.textContent = `${location.city}, ${location.state}, ${location.country}`;
        

        userEmail.textContent = email;

        userPhone.textContent = `Tel: ${phone}`;
    })
}



window.addEventListener('DOMContentLoaded', displayUser);