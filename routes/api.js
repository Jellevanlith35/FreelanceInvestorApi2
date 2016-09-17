var express = require('express');
var router = express.Router();
var Account = require('mongoose').model('Account');
var Job = require('mongoose').model('Job');
var Category = require('mongoose').model('Category');
var Status = require('mongoose').model('Status');
var Accountjob = require('mongoose').model('Accountjob');

router.get('/accounts', function (req, res) {
    console.log("initializing get all accounts call");
    Account.find().select('-password -emailaddress').exec(function (err, accounts) {
        if (err) {  res.json(err); }

        res.json(accounts);
    });
});

router.get('/accounts/:id', function (req, res) {
    console.log("initializing get account call");
    Account.findById(req.params.id).select('-password -emailaddress').exec(function (err, account) {
        if (err) {  res.json(err); }

        res.json(account);
    });
});


router.post("/accounts/register", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var newAccount = new Account(req.body);
    newAccount.save(function (err) {
        res.json(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.post("/accounts/validate/login", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Account.find({ emailaddress: req.body.emailaddress }, function(accountError, account) {
        if (accountError) { res.json(accountError); }

        if(account.length == 0 || account == null)
          res.json(false);
        else {
          account.comparePassword(req.body.password, function(passwordError, isMatch) {
              if (passwordError) { res.json(passwordError); }
              res.json(isMatch);
          });
        }

    });
});


router.get('/jobs', function (req, res) {
    console.log("initializing get all jobs call");
    Job.find().exec(function (err, jobs) {
        if (err) {  res.json(err); }

        res.json(jobs);
    });
});

router.get('/jobs/:id', function (req, res) {
    console.log("initializing get job call");
    Job.findById(req.params.id,function (err, job) {
        if (err) {  res.json(err); }

        res.json(job);
    });
});

router.post("/jobs/create", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var newJob = new Job(req.body);
    newJob.save(function (err) {
        res.json(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.post("/jobs/enroll", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var newAccountjob = new Accountjob(req.body);
    newAccountjob.save(function (err) {
        res.json(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.get('/categories', function (req, res) {
    console.log("initializing get all categories call");
    Category.find().exec(function (err, categories) {
        if (err) {  res.json(err); }

        res.json(categories);
    });
});

router.get('/status', function (req, res) {
    console.log("initializing get all status call");
    Status.find().exec(function (err, status) {
        if (err) {  res.json(err); }

        res.json(status);
    });
});

module.exports = router;
