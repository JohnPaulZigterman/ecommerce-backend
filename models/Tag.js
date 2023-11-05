const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { databaseVersion } = require('../../../01-Class-Content/13-ORM/01-Activities/23-Ins_One-to-Many/config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
