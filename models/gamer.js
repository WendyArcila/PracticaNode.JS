/**
 * Modelo(datos) del Jugador (Gamer)
 * @version 1.0.000 2023-01-10
 * @author Wendy Arcila
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    }

})

/**
 * Se exporta el contenido del schema de jugador como Gamer.
 * @type exports
 */
module.exports = Gamer = mongoose.model('Gamer', gamerSchema);
