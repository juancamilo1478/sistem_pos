const indexRoutes = require('express').Router();
 
 const routeUsers=require('./UserRoutes')
 const routesProducts=require('./ProductRoutes')

indexRoutes
 
    .use('/users', routeUsers)
    .use('/products',routesProducts);
 

indexRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = indexRoutes;