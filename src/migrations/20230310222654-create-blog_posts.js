'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('blog_posts', {
     id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER
     },
     title: {
       allowNull: false,
       type: Sequelize.STRING
     },
     content: {
       allowNull: false,
       type: Sequelize.STRING
     },
     userId: {
       type: Sequelize.INTEGER,
       allowNull: false,
       field: 'user_id',
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
       references: {
         model: 'users',
         key: 'id',
       }
     },
     published: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
     },
     updated: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
     },

   })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('blog_posts');
  }
};
