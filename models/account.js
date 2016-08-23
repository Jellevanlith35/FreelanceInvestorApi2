var mongoose = require('mongoose'),
Schema = mongoose.Schema;
    
console.log('Initializing account schema');
    
var Account = new Schema({
    voornaam: {type: String, required: true},
    tussenvoegsel: {type: String, required: false},
    achternaam: {type: String, required: true},
    geboortedatum: {type: Date, required: true},
    kvk: {type: String, required: false},
    straat: {type: String, required: false},
    huisnummer: {type: String, required: false},
    plaats: {type: String, required: false},
    telefoonnummer: {type: String, required: false},
    bedrijf: {type: String, required: false},
    emailaddress: {type: String, required: true},
    password: {type: String, required: true},
    actief: {type: Boolean, required: true},
}, { collection : 'accounts' });

module.exports = mongoose.model('Account', Account);




