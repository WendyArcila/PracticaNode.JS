/**
 * Ruta para traer los datos de un nuevo juego(game) por ID,
 * así mismo, traer los datos de los jugadores(gamers) que pertenecen a este juego.
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const express = require('express');
const router = express.Router();
const Game = require('../models/game')
const Gamer = require('../models/gamer')

router.get('/:id', async function(req, res, next) {
 let myId = req.params.id
  try {
    let game = await Game.find({id: myId}).exec();
    let gamer = await Gamer.find().exec();
    let myJson = JSON.stringify(game, replacer);
    let allJson = myJson + " gamers: {" + gamer + "}";
    console.log(allJson)
    res.render('start', {result: allJson, id: game[0]._id , ownid: myId, gamer1: gamer[0]._id, gamer2: gamer[1]._id, gamer3: gamer[2]._id });
  }catch (e){
    console.error(e);
  }

});

/**
 * Filtra la respuesta del json con la información que se requiere mostrar
 * @param key clave del json
 * @param value valor
 * @returns {undefined|*} se retorna para evitar que se muestre
 */
function replacer(key,value){
  if(key === "_id"){
    return undefined;
  }else if(key === "type"){
    return undefined;
  }else if(key === "gamerBet"){
    return undefined;
  }else if(key === "__v"){
    return undefined;
  }else if(key === "gamers"){
    return undefined;
  }
  return value;
}

/**
 * Se exporta el contenido del módulo
 * @type {Router}
 */
module.exports = router;
