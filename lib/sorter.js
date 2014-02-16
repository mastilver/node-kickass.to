var _ = require('underscore');

var availability = function(torrents, callback)
{
	var sortedTorrents = _.sortBy(torrents, function(torrent)
	{
		return ((torrentB.seeds * torrentB.seeds) - torrentB.leechs);
	});


	if(typeof callback == 'function')
	{
		return callback(null, sortedTorrents);
	}

	return sortedTorrents;
};

var authenticity = function(torrents, callback)
{
	var sortedTorrents = _.partition(torrents, function(torrent)
	{
		return torrent.verified;
	});

	sortedTorrents[0] = _.sortBy(sortedTorrents[0], 'votes');
	sortedTorrents[1] = _.sortBy(sortedTorrents[1], 'votes');

	sortedTorrents = _.flatten(sortedTorrents);


	if(typeof callback == 'function')
	{
		return callback(null, sortedTorrents);
	}

	return sortedTorrents;
};

var size = function(torrents, smallFirst, callback)
{
	if(typeof smallFirst == 'function')
	{
		callback = smallFirst;
		smallFirst = true;
	}

	if(typeof smallFirst == 'undefined')
	{
		smallFirst = true;
	}


	var sortedTorrents = _.sortBy(torrents, function(torrent)
	{
		return ((smallFirst)? torrent.size: -torrent.size);
	});


	if(typeof callback == 'function')
	{
		return callback(null, sortedTorrents);
	}

	return sortedTorrents;
};

var pubDate = function(torrents, newestFirst, callback)
{
	if(typeof newestFirst == 'function')
	{
		callback = newestFirst;
		newestFirst = true;
	}

	if(typeof newestFirst == 'undefined')
	{
		newestFirst = true;
	}


	var sortedTorrents = _.sortBy(torrents, function(torrent)
	{
		return ((newestFirst)? -torrent.pubDate: torrent.pubDate);
	});


	if(typeof callback == 'function')
	{
		return callback(null, sortedTorrents);
	}

	return sortedTorrents;
};

exports.availability = availability;
exports.authenticity = authenticity;
exports.size = size;
exports.pubDate = pubDate;

// if requested, few more sorters could be added