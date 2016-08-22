var mongoose = require('mongoose'),
Schema = mongoose.Schema;
    
console.log('Initializing category schema');
    
var Category = new Schema({
    description: {type: String, required: true}
}, { collection : 'categories' });

module.exports = mongoose.model('Category', Category);

