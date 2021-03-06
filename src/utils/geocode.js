const request = require('postman-request');

const geocodeReq = (city, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=pk.eyJ1IjoibGFyaXNhdHVyY3UiLCJhIjoiY2ttZ2hoanZqMnp2dzJvbGFhdjgxMmVtaCJ9.LaMk76OruNX-uyhj4TUEhA';
    request({ url, json: true },
        (error, response, body) => {
            if (error) {
                callback('unable to connect to api', undefined);
            } else if (!body.features || body.features.length === 0) {
                callback('unable to connect retrieve location for ' + city, undefined);
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                });

            }
        }
    );

}

module.exports = geocodeReq;