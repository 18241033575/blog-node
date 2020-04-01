const {mongoose, Schema} = require('./config');

const administratorSchema = new Schema({
    id:      { type: String, required: true },
    value:       { type: String, required: true },
}, {
    collection: 'user',
    versionKey: false
});

module.exports = mongoose.model('administrator', administratorSchema);