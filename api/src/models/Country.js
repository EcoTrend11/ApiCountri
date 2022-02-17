const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion : {
      type: DataTypes.STRING,
    },
    area : {
      type: DataTypes.STRING,
    },
    population : {
      type: DataTypes.STRING,
    }
    
  },{
    timestamps : false
  })
};
