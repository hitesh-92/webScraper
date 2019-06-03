async function scrape(req, res, request, cheerio){

  const url = 'https://www.yahoo.com/news/rss';
  return await request(url, handleHTML);

  function handleHTML(err, response, html){
    if(err && response.statusCode != 200) {
      console.log('Error')
      return res.json({error: 'yahoo'});
    }

    const data = [];
	
    const $ = cheerio.load(html, {
	    normalizeWhitespace: true,
	    xmlMode: true
    });
	
	$('item').each( (i, el) => {
		const title = $(el).children()['0'].children[0].data
		const link = $(el).children()['2'].children[0].data
		data.push({title, link});
	});
	
    res.json(data);
  };
};

module.exports = {scrape}
