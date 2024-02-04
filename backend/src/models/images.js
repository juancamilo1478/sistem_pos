const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Images',{
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }, 
    url:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{        
            isUrl: {
                msg: 'La URL debe ser un enlace válido.',
              },
        }
    }, 
 
  },    
  {
     timestamps: false, // Desactivar las columnas createdAt y updatedAt
   })
}

