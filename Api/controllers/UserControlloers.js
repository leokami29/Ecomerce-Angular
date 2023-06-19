import bcrypt from 'bcryptjs'
import models from '../models'

export default {
  register: async (req, res) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await  models.User.create(req.body)
      res.status(201).json(user);
    } catch (error) {
      res.status(500).send({
        message: 'OCURRIO UN PROBLEA',
      })
      console.log(error)
    }
  },

  login: async (req, res) => {
    try {
      const user = await models.User.findOne({
        email: req.body.email,
        state:1
      });
      if (user) {
        //SI ESTA REGISTRADO EN EL SISTEMA
        let compare = await false;
      } else {
        res.status(500).send({
          message: 'EL UUSARIO NO EXISTE',
        })
      }
    } catch (error) {
      res.status(500).send({
        message: 'OCURRIO UN PROBLEA',
      })
      console.log(error)
    }
  },

  update: async (req, res) => {},
  list: async (req, res) => {},
};
