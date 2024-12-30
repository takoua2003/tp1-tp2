const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Erreur interne du serveur' });
};

module.exports = errorHandler;
