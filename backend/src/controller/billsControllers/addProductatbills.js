 
const {  Bills ,Products} = require('../../db');
 
 
const { getiduser} =require('../../actions/getidusertoken')
module.exports = async (req, res) => {
  const {idProduct,idBills,quantity} = req.body;
  let token = false;
  if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
  }
  
  try {
    if(!idProduct||!idBills||quantity){
        throw new Error('faltan datos');
    }
    const iduser =await getiduser(token);
    if(!token){
      throw new Error('error en token');
    }
    const findProduct = await Products.findByPk(idProduct);
    const findBill = await Bills.findByPk(idBills);
    if (!findProduct || !findBill) {
        throw new Error('Producto o factura no encontrado');
      }
      await findBill.addProduct(findProduct, {
        through: {
          quantity: quantity
        }
      });


    res.status(200).json({ ms: "producto asociado correctamente"
    
     }); // `Location` contiene la URL del objeto en S3.
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
