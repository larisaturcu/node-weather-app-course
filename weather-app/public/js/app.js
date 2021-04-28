console.log('client side js that runs in the browser');
// fetch the forecast information

// fetch('http://puzzle.mead.io/puzzle').then((response)=> {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });


fetch('/weather2?search=Lyon').then((response)=> {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
})