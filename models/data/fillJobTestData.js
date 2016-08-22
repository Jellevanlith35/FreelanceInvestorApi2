var Job;

function saveCallback(err){
	if(err){
		console.log('Fill testdata failed, reason: %s', err)
	}
};

function fillTestStatus(callback){
	var testData = [
		{
            "title" : "Webdesign",
            "description" : "Voor een goede klant van Computer Futures ben ik op zoek naar een gedreven sr. Java developer die eigen initiatief neemt in een project. Je werkt volledig Agile/Scrum en ook hierin speelt continuous delivery een grote rol. Voor een goede klant van Computer Futures ben ik op zoek naar een gedreven sr. Java developer die eigen initiatief neemt in een project. Je werkt volledig Agile/Scrum en ook hierin speelt continuous delivery een grote rol. Voor een goede klant van Computer Futures ben ik op zoek naar een gedreven sr. Java developer die eigen initiatief neemt in een project. Je werkt volledig Agile/Scrum en ook hierin speelt continuous delivery een grote rol.Voor een goede klant van Computer Futures ben ik op zoek naar een gedreven sr. Java developer die eigen initiatief neemt in een project. Je werkt volledig Agile/Scrum en ook hierin speelt continuous delivery een grote rol.Voor een goede klant van Computer Futures ben ik op zoek naar een gedreven sr. Java developer die eigen initiatief neemt in een project. Je werkt volledig Agile/Scrum en ook hierin speelt continuous delivery een grote rol.",
            "datetime" : "10/10/2012 14:00",
            "budget" : "in overleg"
        }
	];
    
	Job.find({}, function(err, data){
		// Als er nog geen odprachten zijn vullen we de testdata
		if(data.length == 0){
			console.log('Creating job testdata');

			testData.forEach(function(job){
				new Job(job).save(saveCallback);
			});
		} else{
			console.log('Skipping create job testdata, allready present');
		}

		if(callback){ callback(); }
	});
};

module.exports = function(mongoose){
	  Job = mongoose.model('Job');
    fillTestStatus();
}
