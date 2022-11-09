const express = require('express')

module.exports = function(server){

    //API Routes 
    const router = express.Router
    server.use('/api', router)

    //TODO Routes
    const todoSchama = require('../api/todo/todoServices');
    todoSchama.register(router,'/todos')
} 