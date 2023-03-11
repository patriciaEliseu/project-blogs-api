'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('posts_categories', {
    postId: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'post_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'blog_posts', // nome da tabela
        key: 'id',
      }
    },
    categoryId: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'category_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'categories', // nome da tabela
        key: 'id',
      }
    },
  })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('posts_categories');
  }
};
