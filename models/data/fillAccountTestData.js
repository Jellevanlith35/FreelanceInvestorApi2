var Account;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestAccounts(callback){
	var testData = [
		{ 
            "emailaddress" : "jelle@freelanceinvestor.nl",
            "password": "test"
        }, 
        { 
            "emailaddress" : "emir@freelanceinvestor.nl",
            "password": "test"
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