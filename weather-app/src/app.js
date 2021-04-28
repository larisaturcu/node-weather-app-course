const weather = require('./utils/weather')
const geocode = require('./utils/geocode')

const location = process.argv[2];
if (!location) {
  console.log('Please provide a location');
} else {
  geocode(location, (error, { latitude, longitude } = {}) => {
    if (error) {
      console.log('Something went wrong when calling geocode: ' + error)
    } else {
      console.log('Location of ' + location + ' is: ' + latitude + ',' + longitude);
      weather(latitude, longitude, (error, { description } = {}) => {
        if (error) {
          console.log('Something went wrong when calling weather: ' + error)
        } else {
          console.log('Weather in ' + location + ' is ' + description);
        }
      });

    }
  });
}