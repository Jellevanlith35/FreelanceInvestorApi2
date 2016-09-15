var mongoose = require('mongoose'),
Schema = mongoose.Schema,
relationship = require("mongoose-relationship");

console.log('Initializing account job schema');

var AccountJob = new Schema({
    // account: { type: Schema.ObjectId, ref: 'Account' },
    // job: { type: Schema.ObjectId, ref: 'Job' },
    account: {type: String, required: false},
    job: {type: String, required: false}
}, { collection : 'accountJobs' });

module.exports = mongoose.model('AccountJob', AccountJob);
