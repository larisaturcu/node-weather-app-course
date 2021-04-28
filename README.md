# node-weather-app-course

// course notes:
1. make http requests
 - create a new src folder at th root at the project and add a app.js file
 - install npm module to make http requests : npm i postman-request and nodemon inthe weather app folder. make sure the node_modules are on the sme level as src
 - configure the access to weather and geocode api and create separate service files for each
 - call the modules from the main app.js file

2. install and configure express

- create a new express server
- setup routes for different endpoints 
    // app.get('', (req, res) = {
    }
- send response as html and json
- configure express to serve static assets
- define static html files for index and help page
- use a template engine to render dynamic pages for header and footer - hbs : a pluging for express from handlebars
