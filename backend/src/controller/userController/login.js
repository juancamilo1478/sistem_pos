const{Users}=require('../../db');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const authConfig=require('../../config/authConfig');
module.exports = async (req, res) => {
  const { password, gmail } = req.body;
  let token = false;
  if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
  }
  if (token) {
      // Comprobar validez de token
      try {
        jwt.verify(token, authConfig.secret, async(err, decode) => {
            if (err) {
                if (!password || !gmail){ 
                    throw new Error("No existe este usuario");
                }
                const user = await Users.findOne({
                    where: { gmail: gmail }
                });
                if (!user) {
                    throw new Error("No existe este usuario");
                } else {
                    if (bcrypt.compareSync(password, user.password)) {
                        // Devolvemos token
                        const token = jwt.sign({ user: user }, authConfig.secret, {
                            expiresIn: authConfig.expires
                        });
                        return res.json({
                        user,
                            token: token
                        });
                    } else {
                        throw new Error("Contraseña no coincide");
                    }
                }

            } else {
                return res.json({
                    user:decode.user,
                    token: token
                });
            }
        });
        
      } catch (error) {
        return res.status(400).json({ error: error.message});
      }
    }
}
    