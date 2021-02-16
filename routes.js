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

router.post('/:type/:id', function (req, res, next){
	const reqType = req.params.type;
	console.log(reqType);
	const id = req.params.id;
	console.log(req.body);
	console.log(id);
	if(mockData.hasOwnProperty(reqType)){
		const rawData = req.body;
		console.log(rawData);
		res.status(200).send("ok");
	}
	else{
		res.status(400).json({message:"Unrecognized request"});
	}
});

module.exports = router;