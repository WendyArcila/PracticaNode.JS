/**
 * Ruta para traer los datos de los jugadores(gamer)
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();
const Gamer = require('../models/gamer')

router.get('/', function(req, res, next) {

    const data = Gamer.find({});
    data
        .then(result => res.json(result))
        .catch(err => {
            console.log(err, "ERROR")
        });

});


/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;
