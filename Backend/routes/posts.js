const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const uploadOnCloudinary = require("../utility/cloudary");
const upload = require("../middleware/multer");
const User = require("../models/user");

router.post("/register/user", async (req, res) => {
    try {
      const { name } = req.body;
      const user = new User({ name });
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post("/post/item/:userId", async (req, res) => {
    try {
      const { url } = req.body;
      const { userId } = req.params;
      
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      const post = new Post({
        url,
        author: userId,
      });
      await post.save();
      
      user.posts.push(post);
      await user.save();
  
      res.status(201).json({ post });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.get("/get/user/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id).populate("posts");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file.path);
  const result = await uploadOnCloudinary(req.file.path);
  console.log(result);
  if (result) {
    const posted = await Post.create({
      url: result.url,
    });
    return res.json({ cloudinaryUrl: result.url, post: posted });
  }
});

router.post("/upload/img", upload.single("file"), async (req, res) => {
  console.log(req.file.path);
  const result = await uploadOnCloudinary(req.file.path);
  console.log(result);
  if (result) {
    const posted = await Post.create({
      url: result.url,
    });
    return res.json({ cloudinaryUrl: result.url, post: posted });
  }
});

module.exports = router;
