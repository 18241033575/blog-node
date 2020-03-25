const {mongoose, Schema} = require('./config');

const netSettingSchema = new Schema({
    key:      { type: String, required: true },
    value:  { type: String, required: true },
}, {
    collection: 'netSet',
    versionKey: false
});

module.exports = mongoose.model('netSetting', netSettingSchema);