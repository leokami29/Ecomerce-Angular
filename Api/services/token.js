import jwt from "jsonwebtoken";
import models from "../models";

export default {
  encode: async (_id, rol, email) => {
    const token = jwt.sign(
      {
        _id: _id,
        rol: rol,
        email: email,
      },
      "ecomerce_udemy",
      { expiresIn: "1d" }
    ); 

    return token;
  },

  decode: async (token) => {
    try {
      const { _id } = await jwt.verify(token, "ecomerce_udemy");
      console.log(_id)
      const user = models.User.findOne({
        id: _id,
        state: 1,
      });
      if (user) {
        return user;
      }

      return false;
    } catch (error) {
      console.log(error);
    }
  },
};
