const Joi = require('@hapi/joi');

const UserSchema = Joi.object({
    name: Joi.string().alphanum().min(2).max(150).required(),
    nickname: Joi.string().alphanum().min(2).max(50).required()
});

const validateUser = (req, res, next) => {
    const validation = UserSchema.validate(req.body);

    if (validation.error) {
        logger.error('Error en la validación del usuario:', req.body);
        return res.status(403).json({ msg: 'Error en la validación del usuario' })
    }
    next();
}

module.exports = validateUser;