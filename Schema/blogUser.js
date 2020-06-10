const { mongoose, Schema } = require('./config');

const UserSchema = new Schema({
    account:      { type: String, required: true },
    password:       { type: String },
    nickname:       { type: String },
    imageUrl:       { type: String },
    focus:       { type: Number },
}, {
    collection: 'blogUser',
    versionKey: false
});

module.exports = mongoose.model('blogUser', UserSchema);