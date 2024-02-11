const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Phones',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }, 
    number:{
        type:DataTypes.INTEGER,
        allowNull:false,       
    },

  },    
  {
     timestamps: false, // Desactivar las columnas createdAt y updatedAt
   })
}

