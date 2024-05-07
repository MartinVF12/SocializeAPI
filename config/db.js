const mongoose = require('mongoose');

// Conexión local a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Exportar la conexión
module.exports = mongoose.connection;
