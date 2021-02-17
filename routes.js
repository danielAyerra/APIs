const express = require('express');
const router = express.Router();
const fs = require('fs');
const mockData = JSON.parse(fs.readFileSync('mockData.json'));



/* GET movies listing. */
router.get('/:type', function(req, res, next) {
	const reqType = req.params.type;
	if (mockData.hasOwnProperty(reqType)){
		res.status(200).json(mockData[reqType]);
	}
	else{
		console.log("Not recognised");
		res.status(400).json({message:"Unrecognized request"});
	}
});

router.get('/', function(req, res, next) {
	res.status(200).send(mockData);
});

router.post('/:type/:id', function (req, res, next) {
	const reqType = req.params.type;
	const id = req.params.id;
	const rawData = req.body;
	if(mockData.hasOwnProperty(reqType)){
		mockData[reqType].push(rawData);
		res.status(200).json({message: "Added Succesfully"});	}
	else{
		res.status(400).json({message:"Unrecognized request"});
	}
});

router.put('/:type/:id', function (req, res, next) {
	const reqType = req.params.type;
	const id = req.params.id;
	const rawData = req.body;
	if(mockData.hasOwnProperty(reqType)){
		mockData[reqType].push(rawData);
		res.status(200).json({message: "Added Succesfully"});
	}
	else{
		res.status(400).json({message:"Unrecognized request"});
	}
});

router.delete('/:type/:id', function (req, res, next) {
	const reqType = req.params.type;
	const id = req.params.id;
	if(mockData.hasOwnProperty(reqType)){
		if(mockData[reqType].hasOwnProperty(id)){
			res.status(200).json({message: "Deleted Succesfully"});
		}
		else{
			res.status(404).json({message: "Not found resource"});
		}
	}
	else{
		res.status(400).json({message:"Unrecognized request"});
	}
});

module.exports = router;