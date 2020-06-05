const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {

    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },

    async show(req, res) {
        const post = await Post.findById(req.params.id)
        return res.json(post)
    },

    async delete(req, res) {
        const post = await Post.findById(req.params.id)

        await post.remove()
        return res.send('Post deletado')
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const reqFiles = [];
        for (var i=0; i < req.files.length; i++){
            reqFiles.push(req.files[i].filename)
        }

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: reqFiles
        });

        await post.save

        req.io.emit('post', post);

        return res.json(post);
    }

};