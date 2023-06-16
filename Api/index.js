// Import express
const express = require("express");
// Import cors
const cors = require("cors");
// Import path
const path = require("path");
// Import mongoose
const mongoose = require("mongoose");

// Conexión a la DB
mongoose.Promise = global.Promise;
const dbUrl = "mongodb+srv://Leo:292011Leo@cluster0.kpmvper.mongodb.net/MEAN?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.error(`Error al conectarse con la BD ${err}`);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));
// app.use('/api', route)

// Setear el puerto
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get("port")}`);
});
