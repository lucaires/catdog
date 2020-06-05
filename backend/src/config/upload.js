const multer = require('multer');
const path = require('path');
const uuid4 = require('uuid4')


module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            cb(null, uuid4() + '-' + file.originalname);
        },
    }),
    limits: {
        fileSize: 3.5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/png",
            "image/jpeg",
            "image/pjpeg",
            "image/gif"
        ]
        if (allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error('Invalid file type.'))
        }
    }
};