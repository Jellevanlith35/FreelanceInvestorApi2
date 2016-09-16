var mongoose = require('mongoose'),
Schema = mongoose.Schema,
relationship = require("mongoose-relationship");

console.log('Initializing job schema');

var Accountjob = new Schema({
    // account: { type: Schema.ObjectId, ref: 'Account' },
    account: {type: String, required: true},
    job: {type: String, required: true},
    // category: { type: Schema.ObjectId, ref: 'Category' },
    // status: { type: Schema.ObjectId, ref: 'Status' },
}, { collection : 'accountjob' });

module.exports = mongoose.model('Accountjob', Accountjob);
