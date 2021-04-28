const path = require('path')
const express = require('express');
const weather = require('./utils/weather')
const geocode = require('./utils/geocode')

const app = express();
console.log(__dirname);
console.log(__filename)
//app.com
//app.com/help
//app.com/about
app.use(express.static(path.join(__dirname, '../public')))

// app.get('/help', (req, res) => {
//   // response sent as html
//   res.send('<h1>Help page</h1>')
// });

app.get('/weather/:location', (req, res) => {
  const location = req.params.location;
  if (!location) {
    res.send({error: 'Please provide a location'});
    } else {
      geocode(location, (error, { latitude, longitude } = {}) => {
        if (error) {
          res.send({error: 'Something went wrong when calling geocode: ' + error});
        } else {
            weather(latitude, longitude, (error, { description } = {}) => {
              if (error) {
                res.send({error: 'Something went wrong when calling weather: ' + error});
              } else {
                res.send({
                  location,
                  forecast:'Weather in ' + location + ' is ' + description});
              }
          });
        }
      });
    }
  });

app.get('/*', (req, res) => {
  res.send('NotFound')
});

//start the server on the port 3000, and print a message to make sure the server started
app.listen(3000, () => {
  console.log('server started on port 3000');
});
