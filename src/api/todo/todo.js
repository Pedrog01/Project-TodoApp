const restful = require('node-restful')
const mongoose = restful.mongoose


const todoSchama = new mongoose.Schama({
    description:{type: String, riquered: true},
    done:{type:Boolean,riquered:true , default: false},
    createdAt: {type: Date, default:Date.now}, 
}) 

module.exports = restful.module('todo', todoSchama)