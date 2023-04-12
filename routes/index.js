/**
 * Ruta de inicio da la bienvenida
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {body:'Bienvenid@s'});
});

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;
