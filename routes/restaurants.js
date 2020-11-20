var express = require('express');
var restaurantRouter = express.Router();
const client = require('../client');

/* GET users listing. */
restaurantRouter.get('/', (req, res, next)  => {  
  client
      .query("SELECT * FROM restaurants")
      .then((data)=>res.send(data.rows))
      .catch((err) => console.log(err));
});

restaurantRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;
    client 
        .query("SELECT * FROM restaurants WHERE id=$1", [id])
        .then((data) => res.json(data.rows))
        .catch((err) => console.log(err))
})

restaurantRouter.post('/', (req, res, next) => {
   const { name, picture, tags, city } = req.body;
   console.log(name)
   const text = "INSERT INTO restaurants(name, picture, tags, city) VALUES ($1, $2, $3, $4) RETURNING *";
   const values = [
     name, 
     picture,
     tags,
     city
   ];
   client.query(text, values)
  .then((data) => res.json(data.rows))
  .catch((err) => console.log(err));
})



module.exports = restaurantRouter;
