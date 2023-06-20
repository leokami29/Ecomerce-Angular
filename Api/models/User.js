import mongoose, { Schema } from "mongoose";

//definir modelo de usuario
const UserSchema = new Schema({
  rol: {
    type: String,
    required: true,
    maxlength: 30,
  },
  name: {
    type: String,
    required: true,
    maxlength: 250,
  },
  surname: {
    type: String,
    required: false,
    maxlength: 250,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    maxlength: 250,
  },
  password: {
    type: String,
    minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
    // select: false, //para que no se muestre en la respuesta del get
    require: true,
    maxlength: 250,
  },
  avatar: {
    type: String,
    maxlength: 250,
    require: false,
  },
  state: {
    type: Number,
    default: 1, // 1 es activo 2 desactivo
  },
  phone: {
    type: String,
    maxlength: 20,
    require: false,
  },
  birthday: {
    type: String,
    require: false,
    maxlength: 20,
  },
},
{ timestamps: true }
);

const User = mongoose.model("user", UserSchema)

export default User
