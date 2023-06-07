// const path = require('path');
// const express = require('express');
// const { Games } =require('./db');
// const Dev = require('../.ds');
// require('dotenv').config();
// const axios = require('axios');

// const key = process.env.API_KEY
// const port = 3000;
// const distPath = path.resolve(__dirname, '..', 'dist');

// const app = express();

// // Middleware - every request runs thru this middleware

// app.use(express.json()); // Parse the request body
// app.use(express.urlencoded({ extended: true })); // Parses url
// app.use(express.static(distPath)); // Statically serve up client directory
// app.use(Dev()); // Dev middleware - do not move

// ////////////////////END POINTS///////////////////////////////////////

// app.get('api/games', (req, res) => {


// });



// //////////////////////////////////////////////////////////////////////


// /** Place all code above here */
// app.listen(port, () => {
//   console.log(`
//   Listening at: http://127.0.0.1:${port}
//   `);
// });

