const weather = require('./utils/weather')

const location = 'Lyon';
weather(location, (error, {description} = {}) => {
  if (error) {
		console.log('Something went wrong when calling weather: ' + error)
	} else {
		console.log('Weather in ' + location + ' is '+  description);
	}
});
