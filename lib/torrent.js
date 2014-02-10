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


	function loadData(callback)
	{
		if(!_dataRetrieved)
		{
			// request using _link
		}

		return callback(null, _body);
	}

	this.getComments = function(callback)
	{
		loadData(fucntion(err, body)
		{

		});
	};

	this.getFilesTree = function(callback)
	{
		loadData(fucntion(err, body)
		{

		});
	};

	this.getFiles = function(callback)
	{
		loadData(fucntion(err, body)
		{

		});
	};

	this.getFilesPath = function(callback)
	{
		loadData(fucntion(err, body)
		{

		});
	};







	/*     GETTERS     */

	this.defineProperty(this, 'title', {value: _title});
	this.defineProperty(this, 'category', {value: _category});
	this.defineProperty(this, 'link', {value: _link});
	this.defineProperty(this, 'pubDate', {value: _pubDate});
	this.defineProperty(this, 'torrentLink', {value: _torrentLink});
	this.defineProperty(this, 'nbFiles', {value: _nbFiles});
	this.defineProperty(this, 'nbComments', {value: _nbComments});
	this.defineProperty(this, 'hash', {value: _hash});
	this.defineProperty(this, 'peers', {value: _peers});
	this.defineProperty(this, 'seeds', {value: _seeds});
	this.defineProperty(this, 'leechs', {value: _leechs});
	this.defineProperty(this, 'size', {value: _size});
	this.defineProperty(this, 'votes', {value: _votes});
	this.defineProperty(this, 'verified', {value: _verified});
};




exports = Torrent;