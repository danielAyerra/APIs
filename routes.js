const express = require('express');
const router = express.Router();
const fs = require('fs');
const mockData = JSON.parse(fs.readFileSync('mockData.json'));

/* GET movies listing. */
router.get('/', function(req, res, next) {
  	res.status(200).send(mockData);
});

module.exports = router;