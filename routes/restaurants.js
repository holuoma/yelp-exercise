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




module.exports = restaurantRouter;
