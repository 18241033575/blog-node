const {mongoose, Schema} = require('./config');

const disclaimerSchema = new Schema({
    content:       { type: String, required: false }
}, {
    collection: 'disclaimer',
    versionKey: false
});

module.exports = mongoose.model('disclaimer', disclaimerSchema);