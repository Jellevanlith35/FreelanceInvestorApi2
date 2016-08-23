var Account;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestAccounts(callback){
	var testData = [
		{ 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        },
        { 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        },
        { 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        },
        { 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        },
        { 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        },{ 
            "voornaam" : "Jelle",
            "tussenvoegsel" : "van",
            "achternaam" : "Lith",
            "geboortedatum" : "08-28-1994",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }, 
        { 
            "voornaam" : "Emir",
            "tussenvoegsel" : null,
            "achternaam" : "Zeylan",
            "geboortedatum" : "02-08-1995",
            "kvk" : null,
            "straat" : null,
            "huisnummer" : null,
            "plaats" : null,
            "telefoonnummer" : null,
            "bedrijf" : null,
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test",
            "actief" : true
        }
	];

	Account.find({}, function(err, data){
		// Als er nog geen accounts zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating accounts testdata');
			
			testData.forEach(function(account){
				new Account(account).save(saveCallback);
			});
		} else{
			console.log('Skipping create accounts testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

module.exports = function(mongoose){
	Account = mongoose.model('Account');
    fillTestAccounts();
}