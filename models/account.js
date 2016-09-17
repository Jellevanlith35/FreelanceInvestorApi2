var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

console.log('Initializing account schema');

var Account = new Schema({
    firstName: {type: String, required: false},
    insertion: {type: String, required: false},
    lastName: {type: String, required: false},
    dateOfBirth: {type: Date, required: false},
    street: {type: String, required: false},
    number: {type: String, required: false},
    zipcode: {type: String, required: false},
    place: {type: String, required: false},
    phoneNumber: {type: String, required: false},
    mobileNumber: {type: String, required: false},
    profileImage : {type: Object, required: false},
    kvk: {type: String, required: false},
    company: {type: String, required: false},
    cv : {type: Object, required: false},
    emailaddress: {type: String, required: false},
    password: {type: String, required: false},
    facebook : {type: Object, required: false},
    google : {type: Object, required: false},
    isOnline: {type: Boolean, required: true},
    lastLogin: {type: Date, required: true},
    isActive: {type: Boolean, required: true, default:false},
    favouriteAccounts: [],
    favouriteJobs: []
}, { collection : 'accounts' });

Account.pre('save', function(next){
    var account = this;
    if (!account.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(account.password, salt, function(err, hash){
            if(err) return next(err);

            account.password = hash;
            next();
        });
    });
});

Account.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err, false);
        cb(null, isMatch);
    });
    
};

module.exports = mongoose.model('Account', Account);
