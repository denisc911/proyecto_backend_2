const express = require('express');
const connectDB = require('../config');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/users', require('../routes/userRoutes'));
app.use('/api/posts', require('../routes/postRoutes')); // Corrige la ruta aquí

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
