const request = require('postman-request');

const weatherReq = (city, callback) => {
console.log(city);
    const url = 'http://api.weatherstack.com/current?access_key=9ae707a764a12655d4d3dfe12339e126&query='+city;
    request({url, json:true}, 
        (error,response, body) => {
            console.log('error:', error); // Print the error if one occurred
        if (error) {
            callback('unable to connect to api', undefined);
        } else if (!body.current) {
                callback('unable to connect retrieve weather for location ' + city, undefined);
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