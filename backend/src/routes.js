const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show)
routes.post('/posts', upload.array('image', 4), PostController.store);
routes.delete('/post/:id', PostController.delete)
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;