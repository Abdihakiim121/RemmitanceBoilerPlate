const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const user = require('./user.route');
const shared = require('./shared.route');
const remittance = require('./remittance.route');
const customers = require('./customers.route');



const routPath=[
{
    path: '/auth',
    route: auth
},
{
    path: '/user',
    route:user
},
{
    path: '/shared',
    route:shared
}, 
{
    path: '/remittance', 
    route: remittance
}, 
{
    path: '/customer' , 
    route: customers

}
]

routPath.forEach(d=>{
   router.use(d.path, d.route);
})
module.exports=router;