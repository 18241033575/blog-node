const {mongoose, Schema} = require('./config');

const aboutMeSchema = new Schema({
    content: { type: String, required: false }
}, {
    collection: 'aboutMe',
    versionKey: false
});

module.exports = mongoose.model('aboutMe', aboutMeSchema);