const cloudinary = require('../util/cloudinary')
const uploadFoto = async (req, res, next) => {
    if (req.file === '' || req.file === undefined || req.file === null) {
        res.status(505).json({
            status: 'File Tidak Boleh Kosong'
        })
    }
    const result = await cloudinary.uploader.upload(req.file.path)
    if (result) {
        next()
    } else {
        return next(createError(505, 'Failde Upload'))
    }
}

module.exports = { uploadFoto }