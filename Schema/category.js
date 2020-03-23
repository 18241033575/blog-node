const {mongoose, Schema} = require('./config');

const categorySchema = new Schema({
    id:      { type: String, required: true },
    value:       { type: String, required: true },
}, {
    collection: 'category',
    versionKey: false
});

module.exports = mongoose.model('category', categorySchema);