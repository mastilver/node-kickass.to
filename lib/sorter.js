var availability = function(torrentA, torrentB)
{
	return 	((torrentB.seeds * torrentB.seeds) - torrentB.leechs)
				-
			((torrentA.seeds * torrentA.seeds) - torrentA.leechs);
};

var authenticity = function(torrentA, torrentB)
{
	// if one of the torrents isn't verified,
	// we don't need to check the numbers of votes
	if(torrentA.verified !== torrentB.verified)
	{
		if(torrentA.verified === true)
		{
			return -1
		}
		else
		{
			return 1;
		}
	}

	return torrentB.votes - torrentA.votes;
};

var size = function(smallFirst)
{
	smallFirst = smallFirst || true;

	return function(torrentA, torrentB)
	{
		if(smallFirst)
		{
			return torrentB.size - torrentA.size;
		}
		else
		{
			return torrentA.size - torrentB.size;
		}
	};
};

var pubDate = function(newestFirst)
{
	newestFirst = newestFirst || true;

	return function(torrentA, torrentB)
	{
		if(newestFirst)
		{
			return torrentB.pubDate - torrentA.pubDate;
		}
		else
		{
			return torrentA.pubDate - torrentB.pubDate;
		}
	};
};

exports.availability = availability;
exports.authenticity = authenticity;
exports.size = size;
exports.pubDate = pubDate;

// if requested, few more sorters could be added