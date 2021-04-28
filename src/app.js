const path = require('path')
const express = require('express');
const weather = require('./utils/weather')
const geocode = require('./utils/geocode');
const { response } = require('express');

const app = express();
const port = process.env.PORT || 3000;
const viewsPath = path.join(__dirname, '../templates');

// set handlebars as the template engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

//app.com
//app.com/help
//app.com/weather

app.get('', (req, res) => { // home page uses handlebars 
  res.render('index', {
    title: 'Weather',
    author: 'node course'
  })
});

app.get('/weather/:location', (req, res) => {
  const location = req.params.location;
  if (!location) {
    return res.send({ error: 'Please provide a location' });
  }
  getWeatherForcat(location, res);

});

app.get('/weather2', (req, res) => {
  const location = req.query.search;
  if (!location) {
    return res.send({ error: 'Please provide a location' });
  }
  getWeatherForcat(location, res);
})



app.get('/*', (req, res) => {
  res.send('NotFound')
});


const getWeatherForcat = (location, res) => {
  geocode(location, (error, { latitude, longitude } = {}) => {
    if (error) {
      res.send({ error: 'Something went wrong when calling geocode: ' + error });
    } else {
      weather(latitude, longitude, (error, { description } = {}) => {
        if (error) {
          res.send({ error: 'Something went wrong when calling weather: ' + error });
        } else {
          res.send({
            location,
            forecast: 'The weather in ' + location + ' is ' + description
          });
        }
      });
    }
  });
}


//start the server on the port 3000, and print a message to make sure the server started
app.listen(port, () => {
  console.log('server started on port ' + port);
});
