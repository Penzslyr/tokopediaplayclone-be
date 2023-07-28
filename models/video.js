const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    ThumbnailURL: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('video', videoSchema)