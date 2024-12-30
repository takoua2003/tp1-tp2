const validateProductData = (req, res, next) => {
    const { name, price } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Le champ name est requis et doit être une chaîne non vide.' });
    }

    if (price === undefined || typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: 'Le champ price est requis et doit être un nombre positif.' });
    }

    next();
};

module.exports = validateProductData;
