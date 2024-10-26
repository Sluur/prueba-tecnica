Desarrolla una pequeña API RESTful utilizando Node.js y Express que gestione un recurso de productos con las siguientes operaciones:

GET /productos: Obtener la lista de productos.
POST /productos: Crear un producto enviando un objeto JSON con nombre, precio y stock.
PUT /productos/:id: Actualizar un producto por su ID.
DELETE /productos/:id: Eliminar un producto por su ID.
Aspectos Clave para la Evaluación

Estructura del código:

Organización clara del proyecto (por ejemplo, separar rutas y controladores).
Código limpio y comentado.
Manejo de errores y validaciones:

Validar que el nombre no esté vacío y el precio sea numérico.
Respuestas JSON claras, con códigos HTTP adecuados (404, 400, 500).
Middleware opcional:

Implementa un middleware que loguee cada petición con método y URL.
Datos en memoria o MongoDB:

Puedes almacenar los productos en memoria o simular una conexión con MongoDB.
Entrega del Proyecto

Opción 1: Subir el proyecto a GitHub y compartir el enlace.
Opción 2: Entregar el proyecto en un archivo ZIP con la estructura completa.