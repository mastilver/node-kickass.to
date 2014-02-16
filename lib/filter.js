var isVerified = function(torrents, callback)
{
	var filteredTorrents = [];

	torrents.forEach(function(torrent)
	{
		if(torrent.verified)
		{
			filteredTorrents.push(torrent);
		}
	});


	if(typeof callback == 'function')
	{
		return callback(null, filteredTorrents);
	}

	return filteredTorrents;
};

var descriptionContains = function(torrents, string, callback)
{
	var filteredTorrents = [];

	torrents.forEach(function(torrent)
	{
		torrent.getDescription(function(err, description)
		{
			if(err) return callback(err);

			if(description.contains(string))
			{
				filteredTorrents.push(torrent);
			}
		});
	});


	if(typeof callback == 'function')
	{
		return callback(null, filteredTorrents);
	}

	return filteredTorrents;
};

var categoryIs = function(torrents, category, callback)
{
	var filteredTorrents = [];

	torrents.forEach(function(torrent)
	{
		if(torrent.category == category)
		{
			filteredTorrents.push(torrent);
		}
	});


	if(typeof callback == 'function')
	{
		return callback(null, filteredTorrents);
	}

	return filteredTorrents;
};

var torrentFrom = function(torrents, torrentProvidor, callback)
{
	var filteredTorrents = [];

	torrents.forEach(function(torrent)
	{
		if(torrent.torrentLink.contains(torrentProvidor))
		{
			filteredTorrents.push(torrent);
		}
	});


	if(typeof callback == 'function')
	{
		return callback(null, filteredTorrents);
	}

	return filteredTorrents;
};

exports.isVerified = isVerified;
exports.descriptionContains = descriptionContains;
exports.categoryIs = categoryIs;
exports.torrentFrom = torrentFrom;

// if requested, few more filters could be added