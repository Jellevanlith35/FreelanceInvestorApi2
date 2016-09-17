var Account;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestAccounts(callback){
	var testData = [
			{
            "firstName" : "Jelle",
            "insertion" : "van",
            "achternaam" : "Lith",
            "lastName" : "08-28-1994",
            "street" : null,
            "number" : null,
						"zipcode" : null,
            "place" : null,
            "phoneNumber" : null,
						"mobileNumber" : null,
						"profileImage" : null,
						"kvk" : null,
            "company" : null,
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test",
						"facebook": null,
						"google": null,
						"isOnline": true,
						"lastLogin": "10/10/2012 14:00",
            "isActive" : true,
						"favouriteAccounts" : null,
						"favouriteJobs" : null
        },
				{
	            "firstName" : "Jatoh",
	            "insertion" : "van",
	            "achternaam" : "Lith",
	            "lastName" : "08-28-1994",
	            "street" : null,
	            "number" : null,
							"zipcode" : null,
	            "place" : null,
	            "phoneNumber" : null,
							"mobileNumber" : null,
							"profileImage" : null,
							"kvk" : null,
	            "company" : null,
	            "emailaddress" : "jelle@freelanceinvestor.nl",
	            "password": "test",
							"facebook": null,
							"google": null,
							"isOnline": false,
							"lastLogin": "10/10/2012 14:00",
	            "isActive" : true,
							"favouriteAccounts" : null,
							"favouriteJobs" : null
	        }
	];

	Account.find({}, function(err, data){
		// Als er nog geen accounts zijn vullen we de testdata
		console.log(data);
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
