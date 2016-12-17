var mongoose = require('mongoose');

module.exports = function () {
   var db = mongoose.connect(process.env.MONGO_LOCAL || 'mongodb://localhost/test');

   //require models

   return db;
};
