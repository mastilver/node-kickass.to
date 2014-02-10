var isVerified = function(torrent)
{
	return torrent.verified;
};

var descriptionContains = function(string)
{
	return function(torrent)
	{
		torrent.getDescription(function(err, description)
		{
			if(err)
			{
				throw err;
				return false;
			}

			return description.contains(string);
		});
	};
};

var categoryIs = function(category)
{
	return function(torrent)
	{
		return torrent.category === category;
	};
};

var torrentFrom = function(torrentProvidor)
{
	return function(torrent)
	{
		return torrent.torrentLink.contains(torrentProvidor);
	};
};

exports.isVerified = isVerified;
exports.descriptionContains = descriptionContains;
exports.categoryIs = categoryIs;
exports.torrentFrom = torrentFrom;

// if requested, few more filters could be added