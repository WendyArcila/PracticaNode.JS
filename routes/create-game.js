/**
 * Ruta para guardar los datos y crear un nuevo juego(game),
 * así mismo, crear los jugadores(gamers) que van a participar del juego.
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();
const Game = require('../models/game')
const Gamer = require("../models/gamer");

router.post('/', function(req, res, next) {
  const game = new Game ({
      id: req.body.id,
      type:req.body.type,
      gamers: req.body.gamers,
      inProgress:false
  });
  const gamers = req.body.gamers;
  game
      .save()
      .then(result => {
          let myJson = JSON.stringify(result, replacer, '...')
          res.render('create', {result: myJson, id:result.id})
          for (let i = 0; i < gamers.length; i++) {
              const player = new Gamer({
                  name : gamers[i]
              });
              player.save();
          }
      })
      .catch(err => res.json(err));

});

/**
 * Filtra la respuesta del json con la información que se requiere mostrar
 * @param key clave del json
 * @param value valor
 * @returns {undefined|*} se retorna para evitar que se muestre
 */
function replacer(key,value){
    if(key === "__v"){
        return undefined;
    }else if(key === "gamerBet"){
        return undefined;
    }else if(key === "_id"){
        return undefined;
    }else if(key === "inProgress"){
        return undefined;
    }
    return value;
}

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;