const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/profile"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "profileImg-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

module.exports = upload;
