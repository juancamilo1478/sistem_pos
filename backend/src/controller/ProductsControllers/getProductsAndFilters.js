const { Products} = require('../../db');

module.exports=(req,res)=>{
     const {name } = req.query;

    const pageNumber = parseInt(req.query.pageNumber) || 1; // Página por defecto es 1
    const pageSize = parseInt(req.query.pageSize) || 8;    // Tamaño de página por defecto es 10
    try {
      let whereClause = {};
    
       if (accountId) {
       name = name;
        }
        // if (date) {
        //   whereClause.date = date;
        // }
        // if (state) {
        //   whereClause.state = state;
        // }
        // const totalAccounts = await Accounts.count({ where: whereClause });
        // const totalPages = Math.ceil(totalAccounts / pageSize);
    
        // const searchAccounts = await Accounts.findAll({
        //   where: whereClause,
        //   offset: (pageNumber - 1) * pageSize,
        //   limit: pageSize,
        // });
    
        // res.status(200).json({
        //   accounts: searchAccounts,
        //   totalPages: totalPages,
        //   currentPage: pageNumber,
        // });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


