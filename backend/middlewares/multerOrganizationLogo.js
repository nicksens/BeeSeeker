const multer = require('multer')
const path = require('path')
const fs = require('fs')

const uploadFolder = path.join(__dirname, '..', 'uploads', 'organizationlogos')
if(!fs.existsSync(uploadFolder)){
    fs.mkdirSync(uploadFolder, { recursive: true })
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadFolder)
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)
    },
})
const uploadOrganizationLogo = multer({ storage }).array('photos[]')

module.exports = uploadOrganizationLogo;