// Todas las publicaciones
exports.getAllPosts = (req, res) => {
    res.send('Aquí todas las publicaciones');
};

// Nueva publicación
exports.createPost = (req, res) => {
    res.send('Creada una nueva publicación');
};

// Publicación por ID
exports.getPostById = (req, res) => {
    const postId = req.params.id;
    res.send(`Leyendo la publicación con ID: ${postId}`);
};

// Actualizar una publicación por ID
exports.updatePost = (req, res) => {
    const postId = req.params.id;
    res.send(`Actualizando la publicación de ID: ${postId}`);
};

// Eliminar una publicación por ID
exports.deletePost = (req, res) => {
    const postId = req.params.id;
    res.send(`Eliminanada la publicación de ID: ${postId}`);
};
