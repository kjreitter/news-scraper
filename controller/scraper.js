var cheerio = require('cheerio');

var request = require('request');

var Article = require('../models/Articel');

function scrapeWeb(callback)
{
    request(website, function(error, response, html)
    {
        if (error)
 console.log("error Scraping", error);
    });
    
 var title = $(this).children("div").children("h2").text();
 var link = $(this).attr("href");

var scrapeArticle = new Article(
    {
        title: title,
        link: link
    });

    scrapeArticle.save(function(error)
    {
});

callback();

}

exports.scrapeWeb = scrapeWeb;