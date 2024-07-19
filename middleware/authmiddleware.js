const Post = require('../models/Post');

const checkOwnership = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Publicación no encontrada' });
        }

        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'No autorizado' });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: 'Error de servidor' });
    }
};

module.exports = checkOwnership;
