/**
 * Modelo(datos) del Juego (Game)
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    id:{
        type: String,
        trim: true,
        unique: [true, 'El identificador del juego debe ser único.']
    },
    type:{
        type: String,
        trim: true
    },
    gamers:{
        type:[{
            type:String,
            required: true
        }]
    },
    gamerBet:{
        type:[{
            type: String,
            trim: true
        }]
        },
    inProgress: {
        type: Boolean
    },
    winner: {
        id: {
            type: String
        },
        name: {
          type: String
        }
    }

})


/**
 * Se exporta el contenido del schema del juego como Game.
 * @type exports
 */
module.exports = Game = mongoose.model('Game', gameSchema);
