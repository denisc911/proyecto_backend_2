const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

// Obtener todas las publicaciones
router.get('/', postController.getAllPosts);

// Nueva publicación
router.post('/', postController.createPost);

// Ver una publicación por ID
router.get('/:id', postController.getPostById);

// Actualizar una publicación por ID
router.put('/:id', postController.updatePost);

// Eliminar una publicación por ID
router.delete('/:id', postController.deletePost);

module.exports = router;
