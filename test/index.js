var should = require('should');


var kickass = require('../lib/index.js');

var Torrent = require('../lib/torrent.js');

var searchTerms = 'harry potter';

describe('search', function()
{
	it('should return an array of correct torrents', function(done)
	{
		kickass.search(searchTerms, function(err, torrents)
		{
			if(err) return done(err);

			torrents.should.be.an.Array;
			torrents.should.have.length(25);

			torrents.forEach(function(torrent)
			{
				// should passes but no
				// torrent.should.be.an.instanceOf(Torrent);

				searchTerms.split(' ').forEach(function(searchTerm)
				{
					torrent.title.toLowerCase().should.containEql(searchTerm);
				});
			});

			done();
		});
	});
});