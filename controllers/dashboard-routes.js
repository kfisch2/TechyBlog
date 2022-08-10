const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// add auth middleware here
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'post_text', 'title', 'created_at'],
  })
    .then((postData) => {
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('dashboard', posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
