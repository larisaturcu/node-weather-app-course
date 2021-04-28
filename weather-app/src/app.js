const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=9ae707a764a12655d4d3dfe12339e126&query=Lyon';
request(url, (error, body) => {
  if (error) {
		return console.log("Error: " + error);
	} 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}
);