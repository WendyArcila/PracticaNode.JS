/**
 * Ruta guarda las apuestas de los jugadores para iniciar el juego(game)
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */
const express = require('express');
const router = express.Router();
const Game = require('../models/game')

router.post('/:id', async (req, res) => {
    try {
        const {id, type, gamerBet} = req.body;
        const _id = req.params.id;
        let winner = Math.floor(Math.random() * 6 + 1)
        await Game.updateOne({_id: _id}, {id, type, gamerBet})
        res.render('game', {id: req.body.id, winner: winner})
    } catch {
        res.status(404)
        res.send({error: "Post doesn't exist!"})
    }


});

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;