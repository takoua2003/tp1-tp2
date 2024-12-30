const express = require('express');
const logger = require('./middleware/logger');
const validateUser = require('./middleware/validateUser');
const validateAge = require('./middleware/validateAge');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/products');

const app = express();
const port = 3000;

// Middleware global pour analyser les requêtes JSON
app.use(express.json());

// Logger middleware
app.use(logger);

// Middleware pour valider les produits
app.use('/api', productRoutes);

// Middleware de gestion des erreurs
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
