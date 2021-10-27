const express = require('express');
const router = express.Router();
const auth = require('./auth.route');
const user = require('./user.route');

const routPath=[
{
    path: '/auth',
    route: auth
},
{
    path: '/user',
    route:user
}

]

routPath.forEach(d=>{
   router.use(d.path, d.route);
})
module.exports=router;