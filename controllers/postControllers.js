
const Post = require('../models/Post');

// Obtener todas las publicaciones
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author').populate('comments');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las publicaciones' });
    }
};

// Nueva publicación
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const newPost = new Post({
            title,
            content,
            author: req.user._id
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la publicación' });
    }
};

// Ver una publicación por ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author').populate('comments');
        if (!post) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la publicación' });
    }
};

// Actualizar una publicación por ID
const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }
 // Verificar autoría
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'No autorizado para actualizar esta publicación' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la publicación' });
    }
};

// Eliminar una publicación por ID
const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }

        // Verificar autoría
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'No autorizado para eliminar esta publicación' });
        }

        await post.remove();
        res.status(200).json({ message: 'Publicación eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la publicación' });
    }
};

module.exports = { getAllPosts, createPost, getPostById, updatePost, deletePost };
