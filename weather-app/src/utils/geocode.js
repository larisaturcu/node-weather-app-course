const request = require('postman-request');

const geocodeReq = (city, callback) => {
    console.log(city);
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=pk.eyJ1IjoibGFyaXNhdHVyY3UiLCJhIjoiY2ttZ2hoanZqMnp2dzJvbGFhdjgxMmVtaCJ9.LaMk76OruNX-uyhj4TUEhA';
    request({ url, json: true },
        (error, response, body) => {
<<<<<<< HEAD
=======
            console.log('error:', error); // Print the error if one occurred
>>>>>>> c678b0d2a6c736f2a29ea9302c01e5b3ae68f40f
            if (error) {
                callback('unable to connect to api', undefined);
            } else if (!body.features) {
                callback('unable to connect retrieve location for ' + city, undefined);
            } else {
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                });

            }
        }
    );

}

module.exports = geocodeReq;