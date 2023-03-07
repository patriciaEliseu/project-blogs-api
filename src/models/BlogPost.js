const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      aotoIncrement: true
    },
   title: DataTypes.STRING,
   content: DataTypes.STRING,
   userId: {
    type: DataTypes.INTEGER,
    foreignKey: true,
   },      
   published: DataTypes.DATE,
   updated: DataTypes.DATE
  },
  {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });
  BlogPost.associate = (models) => {
   BlogPost.belongsTo(models.User, 
    { foreignKey: 'userId', as: 'users'
   });
  User.hasMany( models.BlogPostModel, {
    foreignKey: 'userId',
    as: 'blog_posts',  
  });
  };
  return BlogPost;
};

module.exports = BlogPostModel;