const express = require("express");

const {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/product.controller");

const router = express.Router();

//Ruta GET obtener productos
router.get("/", obtenerProductos);
//Ruta POST crear un producto
router.post("crear", crearProducto);
//Ruta PUT editar un producto
router.put(":id", actualizarProducto);
//Ruta DELETE eliminar un producto
router.delete(":id", eliminarProducto);

module.exports = router;
