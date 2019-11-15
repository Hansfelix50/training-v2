const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authJWT = require('passport-jwt');

const config = require('./config')
const errorHandler = require('./resources/lib/errorHandler');

const jwtOptions = {
  secretOrKey: 'SECRET_KEY',
  jwtFromRequest: authJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
}

let jwtStrategy = new authJWT.Strategy({ ...jwtOptions }, (jwtPayload, next) => {
  // usuarioDelPayLoad
  console.log(jwtPayload)
  next(null, {
    id: jwtPayload.id
  });
})

passport.use(jwtStrategy)

const productsRoutes = require('./resources/productos/products.routes');
const usersRoutes = require('./resources/users/users.routes');


const logger = require('./resources/lib/logger');
const morgan = require('./resources/lib/morgan');
const mongoose = require('mongoose')

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/training', { useNewUrlParser: true });
mongoose.connection.on('error', (error) => {
  console.log('==========================')
  logger.error(error);
  logger.error('Fallo la conexion a mongodb');
  process.exit(1);
});

app.use(bodyParser.json())

morgan(app);

// passport.use(new BasicStrategy((user, password, done) => {
//   if (user === 'luis' && password === 'krowdy123') {
//     return done(null, true);
//   } else {
//     return done(null, false);
//   }
// }))

// app.use(passport.initialize())




app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// Errores
app.use(errorHandler.processDBError);
app.use(errorHandler.catchResolver);

// SON EJEMPLOS
// logger.log('log', 'Hello distributed log files!');
// logger.info('info', 'Esto es un logger info');
// logger.warn('WARN');
// logger.error('ERROR');

/************************** */
// READ
//  passport.authenticate('basic', { session: false })

app.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.status(200).send('¡Hola papu!');
  logger.info('Se envió correctamente el mensaje', '¡Hola papu!');
});

// CREATE
app.post('/', (req, res) => {
  res.json(req.body);
  logger.info('Se envió correctamente el mensaje', req.body);
})

// UPDATE
app.put('/', () => {   
  logger.error('Método PUT no definido');
})

// DESTROY
app.delete('/', () => {})

// CRUD
// Create
// Read
// Update
// Destroy
app.listen(config.PORT, () => {
  console.log(`Nuestra app esta escuchando el puerto ${config.PORT}`);
})
