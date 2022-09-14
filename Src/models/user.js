var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);
