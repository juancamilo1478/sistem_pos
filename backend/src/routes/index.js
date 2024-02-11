const indexRoutes = require('express').Router();
 
 const routeUsers=require('./UserRoutes')
 const routesProducts=require('./ProductRoutes')
const routeSuppliers=require('./SuppliersRoutes')
indexRoutes
 
    .use('/users', routeUsers)
    .use('/suppliers',routeSuppliers)
    .use('/products',routesProducts);

indexRoutes.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = indexRoutes;