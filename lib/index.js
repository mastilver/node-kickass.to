var filter = require('./filter.js');
var sorter = require('./sorter.js');
var request = require('request');

var Torrent = require('./torrent.js');


var search = function(searchTerm, category, callback)
{
	if(typeof category == 'function')
	{
		callback = category;
		category = '';
	}


	request(
	{
		url: 'http://kickass.to/json.php?',
		qs:
		{
			q: searchTerm
		},
		json: true
	}, function(err, res, json)
	{
		if(err) return callback(err);
		if(res.statusCode != 200) return callback(new Error(''));

		var torrents = [];

		// async

		json.list.forEach(function(element)
		{
			var torrent = new Torrent(element);

			torrents.push();
		});

		callback(null, json.list);
	});
};




exports.search = search;
exports.filter = filter;
exports.sorter = sorter;