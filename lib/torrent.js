var _ = require('underscore');
var cheerio = require('cheerio');

var Torrent = function(torrent)
{
	var _title = torrent.title,
		_category = torrent.category,
		_link = torrent.link,
		_pubDate = new Date(torrent.pubDate),
		_torrentLink = torrent.torrentLink,
		_nbFiles = torrent.files,
		_nbComments = torrent.comments,
		_hash = torrent.hash,
		_peers = torrent.peers,
		_seeds = torrent.seeds,
		_leechs = torrent.leechs,
		_size = torrent.size,
		_votes = torrent.votes,
		_verified = (torrent === 1),

		_dataRetrieved = false;
		_body = null;


	var loadData = _.once(function()
	{
		request(
		{
			url: _link
		}, function(err, res, body)
		{
			if(err) return err;

			return cheerio.load(body);
		});
	});

	this.getComments = function(callback)
	{
		$ = loadData();
		
	};

	this.getFilesTree = function(callback)
	{
		$ = loadData();
	};

	this.getFiles = function(callback)
	{
		$ = loadData();
	};

	this.getFilesPath = function(callback)
	{
		$ = loadData();
	};







	/*     GETTERS     */

	Object.defineProperty(this, 'title', {value: _title});
	Object.defineProperty(this, 'category', {value: _category});
	Object.defineProperty(this, 'link', {value: _link});
	Object.defineProperty(this, 'pubDate', {value: _pubDate});
	Object.defineProperty(this, 'torrentLink', {value: _torrentLink});
	Object.defineProperty(this, 'nbFiles', {value: _nbFiles});
	Object.defineProperty(this, 'nbComments', {value: _nbComments});
	Object.defineProperty(this, 'hash', {value: _hash});
	Object.defineProperty(this, 'peers', {value: _peers});
	Object.defineProperty(this, 'seeds', {value: _seeds});
	Object.defineProperty(this, 'leechs', {value: _leechs});
	Object.defineProperty(this, 'size', {value: _size});
	Object.defineProperty(this, 'votes', {value: _votes});
	Object.defineProperty(this, 'verified', {value: _verified});
};




module.exports = Torrent;