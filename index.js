const express = require('express');
const connectDB = require('./config.js');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/controllers/users', require('./routes/userRoutes.js'));
app.use('/controllers/posts', require('./routes/postRoutes')); // Corregir ruta aquí

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
