const {mongoose, Schema} = require('./config');

const netUserSchema = new Schema({
    name:      { type: String, required: true },
    password:       { type: String, required: true },
}, {
    collection: 'netUser',
    versionKey: false
});

module.exports = mongoose.model('netUser', netUserSchema);