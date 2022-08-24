const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');



// User may have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Each post has one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


//--------COMMENTS----------//
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',

});

module.exports = { User, Post, Comment };
