const Post = require('./Post');
const User = require('./User');

// User may have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// Each post has one user
Post.belongsTo(User, {
  foreignKey: 'post_id',
});

module.exports = { User, Post };
