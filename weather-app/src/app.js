const weather = require('./utils/weather')
const geocode = require('./utils/geocode')

const location = 'Lyon';
// weather(location, (error, {description} = {}) => {
//   if (error) {
// 		console.log('Something went wrong when calling weather: ' + error)
// 	} else {
// 		console.log('Weather in ' + location + ' is '+  description);
// 	}
// });


geocode(location, (error, {latitude, longitude} = {}) => {
  if (error) {
		console.log('Something went wrong when calling geocode: ' + error)
	} else {
		console.log('Location of ' + location + ' is: '+  latitude + ',' + longitude);
	}
});