var Status;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestStatus(callback){
	var testData = [
		{ 
            "description" : "openstaand"
        }, 
        { 
            "description" : "gesloten"
        }
	];

	Status.find({}, function(err, data){
		// Als er nog geen statussen zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating status testdata');
			
			testData.forEach(function(status){
				new Status(status).save(saveCallback);
			});
		} else{
			console.log('Skipping create status testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

module.exports = function(mongoose){
	Status = mongoose.model('Status');
    fillTestStatus();
}