import jwt from "jsonwebtoken";
import models from '../models'

export default  {
  encode: async (_id, rol, email) => {
    const token = jwt.sign(
      {
        _id: _id,
        rol: rol,
        email: email,
      },
      "ecomerce_udemy",
      { expiresIn: "1d" }
    ); // Agrega una clave secreta y define la expiración del token (1 hora en este ejemplo)

    return token;
  },

  decode: async (token) => {
    try {
      const { _id } = await jwt.verify(token, "ecomerce_udemy");
      const user = models.User.findOne({
        id: _id,
        state: 1
      });
      //verificar usuario con
      if (user){
        return user
        };

      return null;
    } catch (error) {
      console.log(error)
      throw new Error("Token inválido");
    }
  },
};
