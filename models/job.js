var mongoose = require('mongoose'),
Schema = mongoose.Schema,
relationship = require("mongoose-relationship");

console.log('Initializing job schema');

var Job = new Schema({
    account: { type: Schema.ObjectId, ref: 'Account' },
    title: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
    price: {type: String, required: true},
    end_date: {type: Date, required: true},
    location: {type: String, required: true},
    url: {type: String, required: false},
    period: {type: String, required: false},
    category: { type: Schema.ObjectId, ref: 'Category' },
    status: { type: Schema.ObjectId, ref: 'Status' },
}, { collection : 'jobs' });

module.exports = mongoose.model('Job', Job);
