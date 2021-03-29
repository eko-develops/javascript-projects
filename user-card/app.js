const onLoad =  () => {
        fetch('https://randomuser.me/api/')
        .then( response => {
            return response.json();
        })
        .then( data => {
            const { results } = data;

            //We do not need to spread the array index because it is already an object
            // const { ...result} = results[0];
            const result = results[0];
            console.log(result);
        })
        .catch( err => {
            console.log(err);
        })
}

window.addEventListener('DOMContentLoaded', onLoad);