const express = require('express');
const router = express.Router();
const fs = require('fs');
const mockData = JSON.parse(fs.readFileSync('mockData.json'));


/* GET movies listing. */
router.get('/:type', function(req, res, next) {
	const reqType = req.params.type;
	if (mockData.hasOwnProperty(reqType)){
		console.log(mockData[reqType]);
		res.status(200).send(mockData[reqType]);
	}
	else{
		console.log("Not recognised");
		res.status(400).json({message:"Unrecognized request"});
	}
});

router.get('/', function(req, res, next){
	res.status(200).send(mockData);
});

module.exports = router;