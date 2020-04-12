const {mongoose, Schema} = require('./config');

const articlesSchema = new Schema({
    id:      { type: String, required: true },
    title:       { type: String, required: true },
}, {
    collection: 'articles',
    versionKey: false
});

module.exports = mongoose.model('articles', articlesSchema);