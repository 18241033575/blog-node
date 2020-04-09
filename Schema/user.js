const { mongoose, Schema } = require('./config');

const UserSchema = new Schema({
    username:      { type: String, required: true },
    password:       { type: String, required: true },
}, {
    collection: 'user',
    versionKey: false
});

module.exports = mongoose.model('user', UserSchema);