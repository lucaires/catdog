const mongoose = require('mongoose');
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    likes: {
        type: Number,
        default: 0
    },
    image: {
        type: Array,
    },
}, {
    timestamps: true
});

PostSchema.pre('remove', function(){
    for (var i=0; i < 4; i++){
        reqFile = promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'uploads', this.image[i]))
    }
    return reqFile
})

module.exports = mongoose.model('Post', PostSchema);