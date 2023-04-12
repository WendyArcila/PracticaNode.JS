/**
 * Ruta principal de la app que permite ponerla en marcha
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require ('mongoose');

mongoose.set('strictQuery', true);

const mongodb = 'mongodb://127.0.0.1/usersDice';

/**
 * Conexión a la base de datos mongodb
 */
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB not connected',err));

const app = express();

/**
 * Definición del puerto a usar
 * @type {string|number}
 */
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Definición de las rutas que se usarán en la app
 */
app.use('/', require('./routes'));
app.use('/game', require('./routes/getGame'));
app.use('/game', require('./routes/getWinner'));
app.use('/player', require('./routes/getPlayers'));
app.use('/createGame', require('./routes/create-game'));
app.use('/startGame', require('./routes/startGame'));

app.set('view engine', 'pug');

/**
 * Se exporta el contenido del módulo
 * @type {app}
 */
module.exports = app;

