const path = require('path')
const express = require('express');
const weather = require('./utils/weather')
const geocode = require('./utils/geocode')

const app = express();
const viewsPath=path.join(__dirname, '../templates');

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
    title: 'home page',
    author: 'node course'
  })
});

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
