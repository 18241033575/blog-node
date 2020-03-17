const {mongoose, Schema} = require('./config');

const projectsResolveSchema = new Schema({
    id: Number,
    value: String
}, {
    collection: 'projects_resolve',
    versionKey: false
});

module.exports = mongoose.model('projects_resolve', projectsResolveSchema);