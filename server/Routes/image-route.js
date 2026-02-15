const express = require('express');
const multer = require('multer');
const uniqid = require('uniqid');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Public/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${uniqid()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.status(200).json({
    message: 'Image uploaded successfully',
    url: `http://localhost:3000/images/${req.file.filename}`,
  });
});

module.exports = router;
