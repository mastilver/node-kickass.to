var filter = require('./filter.js');
var sorter = require('./sorter.js')


var search = function(searchTerm, category, callback)
{
	if(typeof category == 'function')
	{
		callback = category;
		category = '';
	}


	// code ...
};




exports.search = search;
exports.filter = filter;
exports.sorter = sorter;