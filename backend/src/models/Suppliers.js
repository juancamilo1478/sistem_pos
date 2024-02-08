const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Suppliers',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }, 
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{  
         
         len: {
            args: [2, 255], // El nombre debe tener al menos 3 caracteres
            msg: 'minimo el producto debe tener dos caracteres',
          },
        }
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,

    },

    direction:{
      type:DataTypes.STRING, 
      allowNull:false
    },
    phone:{
        
        type:DataTypes.STRING, 
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
 
  },    
  {
     timestamps: false, // Desactivar las columnas createdAt y updatedAt
   })
}