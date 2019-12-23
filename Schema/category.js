const { Schema } = require('./config');

const categorySchema = new Schema({
    id: Number,
    value: String
}, {
    collection: 'category',
    versionKey: false
});

module.exports = mongoose.model('category', categorySchema);