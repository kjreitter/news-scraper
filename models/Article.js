var mongoose = require('mongoose');

var db = require("../config/connection");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title:
    {
        type: String,
        required: true,
        unique: true,
        dropDups: true

    },
    link:
    {
        type: String,
        required: true,
        unique: true
    },
    note: [{
        type: Schema.Types.ObjectID,
        ref: "note"
    }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports= Article;