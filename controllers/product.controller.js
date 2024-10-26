const { json } = require("express");
const Product = require("../models/product.model");

//Obtener productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al traer los productos" });
  }
};

//Crear Producto
const crearProducto = async (req, res) => {
  const { nombre, precio, stock } = req.body;

  if (!nombre && typeof precio !== "number") {
    return res.status(400).json({ error: "Datos invalidos" });
  }

  try {
    const nuevoProducto = new Product({ nombre, precio, stock });
    await nuevoProducto.save();
    res.status(201), json({ nuevoProducto });
  } catch (error) {
    return res.status(500).json({ error: "Error al crear el producto" });
  }
};

//Actualizar Producto
const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, stock } = req.body;

  if (!nombre && typeof precio !== "number") {
    return res.status(400).json({ error: "Datos invalidos" });
  }

  try {
    const productoActualizado = await Product.findByIdAndUpdate(
      id,
      { nombre, precio, stock },
      {
        new: true,
      }
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

//Eliminar producto
const eliminarProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const productoEliminado = await Product.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ messagge: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
