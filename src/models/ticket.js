'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      types : DataTypes.STRING,
      allowNull : false
      
    },
    content: {
      types : DataTypes.STRING,
      allowNull : false
    },
    recepientEmail: {
      types : DataTypes.STRING,
      allowNull : false
    },
    status: {
      types : DataTypes.ENUM,
      values : ['FAILED','SUCCESS', 'PENDING'],
      defaultValue:'PENDING'
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};