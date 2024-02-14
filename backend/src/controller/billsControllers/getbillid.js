const { Bills, Products} = require("../../db");
const { getiduser } = require("../../actions/getidusertoken");

module.exports = async (req, res) => {
  let token = false;

  const idbill =req.params.id;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }

  try {
    if (!token) {
      throw new Error("error en token");
    }
    const iduser = await getiduser(token);
    const bill = await Bills.findOne({
      where: {
        id: idbill,
        userId: iduser,
      },
      include: [
        {
          model: Products,
          through: { attributes: ['quantity'] } // Para incluir la cantidad desde la tabla intermedia BillProducts
        }
      ]
    });

    res.json({
      data: bill,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
