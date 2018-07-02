var express = require('express');
var router = express.Router();
var Article = require('../models/Article');
var Note = require('../models/Note');
var scraper = require('../controler/scraper');

router.get('/', function(request, response)
{
    Article.find({}, function(error, data)
    {
        if (error) console.log ('error getting articles, error');

        response.render('index', {title: "NewsScraper", articles: data});

    });
});
router.get('/note/:id', function(req, res)
{
    Article.findOne({_id:request.params.id})
    .populate('note')
    .exec(function(error, doc){
        if (error) console.log("error getting notes", error);
        response.send(doc.note);
    });
})
router.post('/note/:id', function(req, res)
{
    var newNote = new Note (request.body);

    newNote = new Note(request.body);

    newNote.save(function(error, doc)
{
    article.findOneAndUpdate(
        {_id:request.params.id},
        {$push: {note:doc_id}},
        {new:true},
        function(error, anotherDoc) {
        console.log('post error', error);
        respose.send(anotherDoc);
        });

    
});
});

router.post('/deletNote/id:id', function(request, response)
{
    console.log(request.params.id);
    Note.findByIdAndRemove({_id: request.params.id}, function(error)
{
    if (error) console.log ('error deleting note', error);
    response.send();
});
})

module.exports = router