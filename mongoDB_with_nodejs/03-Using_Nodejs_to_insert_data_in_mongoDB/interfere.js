var MongodbClient = require('mongodb');
var assert = require('assert')
var ObjectId = require('mongodb').objectId;
var url = 'mongodb://localhost::27017/test';

var insertDocument = function(db, callback) {
	db.collection('restaurants').insertOne( {
		"address" : {
			"street" : "test st.",
			"zipcode" : "12345",
			"building" : "1265",
			"coord" : [ -72.123, 12.4313 ]
		},
		"borwq": "swdwewq",
		"city" : "taiwan",
		"date" : [{
				"date" : "2015/03/25",
				"grade": "A",
				"score": 23,
			},{
				"date" : "2015/08/18",
				"grade": "A",
				"score": 11
			}
		],
		"name": "Jack",
		"restaurants_id": "123121"
	}, function(err, result) {
		assert.equal(null, err);
		console.log("Inserted a document into the restaurants collection.");

	 // Call the callback function if it is existed.
		callback(result);
	});
};

MongodbClient.connect(url, function(err, db) {
	assert.equal(null, err);
	insertDocument(db, function() {
		db.close();
	});
});
