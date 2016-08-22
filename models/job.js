var mongoose = require('mongoose'),
Schema = mongoose.Schema;
    
console.log('Initializing job schema');
    
var Job = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
    budget: {type: String, required: true}
}, { collection : 'jobs' });

module.exports = mongoose.model('Job', Job);

