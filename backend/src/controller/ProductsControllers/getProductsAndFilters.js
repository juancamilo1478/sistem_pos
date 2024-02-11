const { Products,Images } = require("../../db");
const { getiduser} =require('../../actions/getidusertoken');
module.exports = async (req, res) => {
  const { name, category } = req.query;

  const pageNumber = parseInt(req.query.pageNumber) || 1; // Página por defecto es 1
  const pageSize = parseInt(req.query.pageSize) || 6; // Tamaño de página por defecto es 10
  let token = false;
  try {
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    } 
    if(!token){
      throw new Error('no tiene token')
    }
    const iduser =await getiduser(token);
    let filters = {};
    if(iduser&&token){
      filters.userId=iduser;
    }
    if (name) {
      filters.name = name;
    }
    if (category) {
      filters.category = category;
    }
    const totalproducts = await Products.count({ where: filters });
    const totalpages = Math.ceil(totalproducts / pageSize);

    const searchProducts = await Products.findAll({ 
      where: filters,
      offset: (pageNumber - 1) * pageSize,
      limit: pageSize,
      include: [{
        model: Images,
        as: 'Images' // Alias opcional para las imágenes asociadas a los productos
    }]
    });

    res.status(200).json({
      products: searchProducts,
      totalPages: totalpages,
      currentPage: pageNumber,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
