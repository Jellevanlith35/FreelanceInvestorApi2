var mongoose = require('mongoose'),
Schema = mongoose.Schema;
    
console.log('Initializing account schema');
    
var Account = new Schema({
    emailaddress: {type: String, required: true},
    password: {type: String, required: true},
}, { collection : 'accounts' });

module.exports = mongoose.model('Account', Account);




