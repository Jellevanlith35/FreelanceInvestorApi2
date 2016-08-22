var Category;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestCategories(callback){
	var testData = [
		{ 
            "description" : "jelle@freelanceinvestor.nl"
        }, 
        { 
            "description" : "emir@freelanceinvestor.nl"
        }
	];

	Category.find({}, function(err, data){
		// Als er nog geen categoriën zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating categories testdata');
			
			testData.forEach(function(category){
				new Category(category).save(saveCallback);
			});
		} else{
			console.log('Skipping create categories testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

module.exports = function(mongoose){
	Category = mongoose.model('Category');
    fillTestCategories();
}