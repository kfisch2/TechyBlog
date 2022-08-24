const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

// GET all comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE a comment
router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// DELETE comment by id
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbCommentData) => {
    if (!dbCommentData) {
      res.status(404).json({ message: 'No comment with that id exists' });
      return;
    }
    res.json(dbCommentData);
  });
});

module.exports = router;
