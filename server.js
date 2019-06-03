const express = require('express');
const fs = 	require('fs');
const request = require('request');
const cheerio = require('cheerio');

const app = express();
const PORT  = process.env.PORT || 5050;

app.get('', (req, res) => res.json('running'));

app.listen(PORT, () => {
  console.log(`\x1Bc
${new Date().toLocaleString()}
Server running on port:${PORT}
  `)
});
