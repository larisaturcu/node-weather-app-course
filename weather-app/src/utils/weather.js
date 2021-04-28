const request = require('postman-request');

const weatherReq = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ae707a764a12655d4d3dfe12339e126&query=' + latitude + ',' + longitude;
    request({ url, json: true },
        (error, response, body) => {
            if (error) {
                callback('unable to connect to api', undefined);
            } else if (!body.current) {
                callback('unable to connect retrieve weather for location ' + latitude + ',' + longitude, undefined);
            } else {
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                callback(undefined, {
                    description: body.current.weather_descriptions[0]
                });

            }
        }

    );

}

module.exports = weatherReq;