const Joi = require('@hapi/joi')

const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  price: Joi.number().min(0).required(),
  currency: Joi.string().min(3).max(3).required()
});


const validateProduct = (req, res, next) => {
  const validation = productSchema.validate(req.body);

  if (validation.error) {
    logger.error('Error en la validación del producto:', req.body);
    return res.status(403).send('Verifica tus datos');
  }
  next()
}


module.exports = validateProduct;
