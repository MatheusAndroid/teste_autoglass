'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING },
    active: { type: DataTypes.BOOLEAN },
    manufacturing: { type: DataTypes.DATE },
    expiration: { type: DataTypes.DATE },
    supplierCode: { type: DataTypes.STRING },
    supplierDescription: { type: DataTypes.STRING },
    cnpj: { type: DataTypes.STRING, unique: true },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    
    }, {
      timestamps: true
    });
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('products');
  }
};
