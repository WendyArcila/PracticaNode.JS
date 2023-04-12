/**
 * Ruta para guardar los datos y crear un nuevo jugador(gamer)
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();
const Gamer = require('../models/gamer')

router.post('/', function(req, res, next) {

    const gamer = new Gamer({
        name: req.body.name
    });
    gamer
        .save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;
