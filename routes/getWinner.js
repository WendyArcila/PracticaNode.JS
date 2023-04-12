/**
 * Ruta para traer los datos del juego(game) en curso y su ganador
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();
const Gamer = require('../models/gamer')
const Game = require('../models/game')

router.get('/:id/winner/:winner', async function(req, res, next) {
    let myId = req.params.id
    try {
        let game = await Game.find({id: myId}).exec();
        let gamer = await Gamer.find().exec();
        let winner = req.params.winner;
        console.log("Ganador: "+ game[0].gamerBet)
        let position= exist(game[0].gamerBet, winner)
        let theWinner;
        if (position !== undefined){
            theWinner =  gamer[position];
        }else{
            res.redirect(req.get('referer'))
        }
        console.log(winner);
        console.log("Gamer: "+ gamer[position]);
        res.render('winner', {winner: theWinner });
    }catch (e){
        console.error(e);
    }
});

/**
 * Evalúa el contenido de un array(items) comparándolo con un número(winner)
 * sí es igual retorna la posición.
 * @param items array de apuestas de los jugadores
 * @param winner el número del dado
 * @returns {number} la posición en la que se encuentra el número ganador
 */
function exist(items, winner){
    for (let i = 0; i < items.length; i++) {
        if(items[i] == winner){
            console.log("pocision: " + i)
            return i
        }
    }
}

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;