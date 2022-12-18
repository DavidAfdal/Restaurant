const multer = require('multer')
const path = require('path')

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname).toLowerCase()
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("File type is not support"), false)
            return
        }
        cb(null, true)
    }
})