var express = require('express');
var router = express.Router();
var Account = require('mongoose').model('Account');
var Job = require('mongoose').model('Job');
var Category = require('mongoose').model('Category');
var Status = require('mongoose').model('Status');

router.get('/accounts', function (req, res) {
    console.log("initializing get all accounts call");
    Account.find().exec(function (err, accounts) {
        if (err) {  res.json(err); }
        
        res.json(accounts);
    });
});

router.get('/jobs', function (req, res) {
    console.log("initializing get all jobs call");
    Job.find().exec(function (err, jobs) {
        if (err) {  res.json(err); }
        
        res.json(jobs);
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
