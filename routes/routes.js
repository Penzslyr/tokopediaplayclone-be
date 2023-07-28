const express = require('express');
const router = express.Router();
const VideoList = require('../models/video.js');
const ProductList = require('../models/product.js');
const CommentList = require('../models/comment')


router.get('/getVideoAll', async (req, res) => {
  try {
    const videos = await VideoList.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.nmessage });
  }
});

router.post('/postVideo', (req, res) => {
  const video = new VideoList({
    title: req.body.title,
    ThumbnailURL: req.body.ThumbnailURL,
  });

  try {
    const videoToSave = video.save();
    res.status(200).json({ message: 'Video added' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/getProductsAll', async (req, res) => {
  try {
    const product = await ProductList.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.nmessage });
  }
});

router.get('/products/:videoId', async (req, res) => {
  try {
    const videoId = req.params.videoId;

    const product = await ProductList.find({ VideoId: videoId });

    if (!product || product.length === 0) {
      return res
        .status(404)
        .json({ error: 'Product list not found for the specified Video ID' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching product list' });
  }
});

router.post('/postVideo', (req, res) => {
  const video = new VideoList({
    title: req.body.title,
    ThumbnailURL: req.body.ThumbnailURL,
  });

  try {
    const videoToSave = video.save();
    res.status(200).json({ message: 'Song added to the playlist' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/comments/:videoId', async (req, res) => {
    try {
      const videoId = req.params.videoId;
  
      const comment = await CommentList.find({ VideoId: videoId });
  
      if (!comment || comment.length === 0) {
        return res
          .status(404)
          .json({ error: 'comment list not found for the specified Video ID' });
      }
  
      res.json(comment);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching comment list' });
    }
  });

  router.post("/comments", (req, res)=>{
    const comment = new CommentList({
        username: req.body.username,
        comment: req.body.comment,
        timestamp: new Date(), 
        VideoId: req.body.VideoId
      });
    
      try {
        const commentToSave = comment.save();
        res.status(200).json({ message: 'comment added to the video' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  })

module.exports = router;
