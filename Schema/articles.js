const {mongoose, Schema} = require('./config');

const articlesSchema = new Schema({
    title:      { type: String, required: true },
    tags:      { type: String, required: true },
    content:      { type: String, required: true },
    intro:      { type: String },
    hot: { type: Boolean }
}, {
    collection: 'articles',
    versionKey: false
});

module.exports = mongoose.model('articles', articlesSchema);