var mongoose = require('mongoose'),
Schema = mongoose.Schema;
    
console.log('Initializing status schema');
    
var Status = new Schema({
    description: {type: String, required: true}
}, { collection : 'status' });

module.exports = mongoose.model('Status', Status);

