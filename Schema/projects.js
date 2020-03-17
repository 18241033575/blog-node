const {mongoose, Schema} = require('./config');

const projectsSchema = new Schema({
    id: Number,
    value: String
}, {
    collection: 'projects',
    versionKey: false
});


module.exports = mongoose.model('projects', projectsSchema);