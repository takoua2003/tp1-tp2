const validateAge = (req, res, next) => {
    const { age } = req.body;
    if (age !== undefined && age < 0) {
        const error = new Error("L'âge ne peut pas être négatif.");
        error.status = 400;
        return next(error);
    }
    next();
};

module.exports = validateAge;
