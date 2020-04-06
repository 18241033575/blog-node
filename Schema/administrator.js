const {mongoose, Schema} = require('./config');

const administratorSchema = new Schema({
    name:     { type: String, required: true },
    groupName: { type: String },
    auth: { type: Number }
}, {
    collection: 'user',
    versionKey: false
});

module.exports = mongoose.model('administrator', administratorSchema);