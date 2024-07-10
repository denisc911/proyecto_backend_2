// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Ruta para obtener todas las publicaciones
router.get('/', postController.getAllPosts);

// Ruta para crear una nueva publicación
router.post('/', postController.createPost);

// Ruta para obtener una publicación por ID
router.get('/:id', postController.getPostById);

// Ruta para actualizar una publicación por ID
router.put('/:id', postController.updatePost);

// Ruta para eliminar una publicación por ID
router.delete('/:id', postController.deletePost);

module.exports = router;
