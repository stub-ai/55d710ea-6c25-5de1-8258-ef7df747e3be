const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../models/Image');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), async (req, res) => {
  const newImage = new Image({
    img: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/png'
    },
    tags: req.body.tags.split(',')
  });

  try {
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/search', async (req, res) => {
  try {
    const images = await Image.find({ tags: req.query.tag });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;