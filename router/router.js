let express = require('express');
let router = express.Router();

var website_route = require('../controller/index');

module.exports = function(router) {

       //website
    router.get('/', website_route.index);
    router.post('/transaction/create', website_route.create);
    router.get('*', website_route.page_not_found);

}