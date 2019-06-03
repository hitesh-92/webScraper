const express = require('express');
const fs = 	require('fs');
const request = require('request');
const cheerio = require('cheerio');

const Yahoo = require('./controllers/yahoo'); 

console.log(123)

const app = express();
const PORT  = process.env.PORT || 5050;

app.get('', (req, res) => res.json('gReport Scraper'));

app.get('/scrape/yahoo', (req, res) => { Yahoo.scrape(req, res, request, cheerio) });

app.listen(PORT, () => {
  console.log(`\x1Bc
${new Date().toLocaleString()}
Server running on port:${PORT}
  `)
});
