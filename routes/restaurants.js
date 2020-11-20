var express = require('express');
var restaurant = express.Router();
const client = require('../client');

/* GET users listing. */
restaurant.get('/', (req, res, next)  => {
  console.log('hello world!')
     
  // client
  //     .query("SELECT * FROM restaurant")
        
  //     .then((data)=>res.send('alejandra'))
  //     .catch((err) => console.log(err));
});

// restaurant.get('/:id', (req, res, next) => {
//     client 
//         .query("")
//         .then((data) => res.json(data.rows))
//         .catch((err) => console.log(err))
// })

module.exports = restaurant;
