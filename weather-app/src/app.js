const express = require('express');

const app = express();

//app.com
//app.com/help
//app.com/about

app.get('', (req, res) => {
  res.send('hello express')
});

app.get('/help', (req, res) => {
  res.send('Help page')
});

app.get('/weather/:location', (req, res) => {
  const location = req.params.location;
  res.send('weather for ' + location) 
});

app.get('/*', (req, res) => {
  res.send('NotFound')
});

//start the server on the port 3000, and print a message to make sure the server started
app.listen(3000, () => {
  console.log('server started on port 3000');
});




// const weather = require('./utils/weather')
// const geocode = require('./utils/geocode')

// const location = process.argv[2];
// if (!location) {
//   console.log('Please provide a location');
// } else {
//   geocode(location, (error, { latitude, longitude } = {}) => {
//     if (error) {
//       console.log('Something went wrong when calling geocode: ' + error)
//     } else {
//       console.log('Location of ' + location + ' is: ' + latitude + ',' + longitude);
//       weather(latitude, longitude, (error, { description } = {}) => {
//         if (error) {
//           console.log('Something went wrong when calling weather: ' + error)
//         } else {
//           console.log('Weather in ' + location + ' is ' + description);
//         }
//       });

//     }
//   });
// }