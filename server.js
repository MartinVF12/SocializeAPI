const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Asegúrate de que el path es correcto según tu estructura de archivos

// Cargar variables de entorno
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware para parsear JSON y urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
