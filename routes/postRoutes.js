const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');
const authMiddleware = require('../middleware/auth');
const checkOwnership = require('../middleware/authorization');

// Obtener todas las publicaciones
router.get('/', authMiddleware, postController.getAllPosts);

// Nueva publicación
router.post('/', authMiddleware, postController.createPost);

// Ver una publicación por ID
router.get('/:id', authMiddleware, postController.getPostById);

// Actualizar una publicación por ID
router.put('/:id', authMiddleware, checkOwnership, postController.updatePost);

// Eliminar una publicación por ID
router.delete('/:id', authMiddleware, checkOwnership, postController.deletePost);

module.exports = router;
