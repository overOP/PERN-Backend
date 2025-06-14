const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
                 // Storage folder
      cb(null, './Storage')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
     //cd is callback
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;