const express = require('express')
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const validateUsers = require('./users.validate');
const config = require('../../config')
let users = require('../../db').users;
const userController = require('./users.controller');
let { generateValidationCode, sendValidationCode } = require('../lib/sms');

const usersRoutes = express.Router();

// READ
usersRoutes.get('/', (req, res) => {
  res.json(users);
  logger.info('Se envió correctamente los usuarios', `total: ${users.length}`);
});

usersRoutes.post('/', validateUsers, (req, res) => {
  const hp = bcrypt.hashSync(req.body.password, 10);
  const validationCode = generateValidationCode();

  const newUser = { ...req.body, id: uuidv4(), password: hp, validationCode, validationStatus: 'pending' };

  //Creación del usuario en DV
  userController.createUser(newUser);

  //Enviar código de validación por SMS 
  sendValidationCode(newUser.cellphone);

  res.json('Se ha creado correctamente el usuario, te hemos enviado un SMS para validar la cuenta.');

  logger.info('Se ha creado correctamente el usuario ', newUser.id);
})

//LOGIN
usersRoutes.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.filter(user => user.username === username)[0]

  const isAuthenticated = bcrypt.compareSync(password, user.password);

  if (isAuthenticated) {
    const token = jwt.sign({ id: user.id }, config.SECRET_KEY, { expiresIn: config.EXPIRES_IN })

    res.json({ token });
    logger.info('Se autentico al usuario', user.id);

  } else {
    res.status(401).send('Verifica tu password');
    logger.error('Verifica tu password');
  }
})

module.exports = usersRoutes;
