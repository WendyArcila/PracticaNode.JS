# Taller6Cantera2
Ejercicio caso práctico de una página dinámica

# Dice
Corresponde al taller 6 de Cantera 2, de Sofka U. El cuál tiene como objetivo crear un Juego de dados para múltiples jugadores.

Proyecto demo en donde se cree una separación de responsabilidades usando los conceptos de:

- Plantilla (vista)

- Lógica (controlador)

- Datos (Modelo)


Se debe tener un sistema orientado a Rest, para esto se debe tener en cuenta lo siguiente: 

1. Request de creación de juego, con su respectivo formulario:
POST http://localhost:8080/createGame
2. Query para consultar el juego y su estado (listado de jugadores y estados como tal del juego)
GET: http://localhost:8080/game/fffff-ggg-jjjjj
3. Query para determinar el ganador del juego (una vista con el ganador)
GET http://localhost:8080/game/fffff-ggg-jjjjj/winner 
4. Request para iniciar el juego con la apuesta por cada jugador (acción que permita iniciar el juego)
POST http://localhost:8080/startGame 

## Imágenes de evidencia 
1. ![Index](https://github.com/WendyArcila/Taller6Cantera2/blob/master/img/Index%20.jpg?raw=true)
2. ![Creación del juego](https://github.com/WendyArcila/Taller6Cantera2/blob/master/img/CreateGame.jpg?raw=true)
3. ![Obtener el juego](https://github.com/WendyArcila/Taller6Cantera2/blob/master/img/getGame.jpg?raw=true)
4. ![Número ganador](https://github.com/WendyArcila/Taller6Cantera2/blob/master/img/winner.jpg?raw=true)
5. ![Juador@ ganadora](https://github.com/WendyArcila/Taller6Cantera2/blob/master/img/winner2.jpg?raw=true)

## Tecnología
 * NodeJS, en WebStorm
 
## Realizado por
 [<img src="https://avatars.githubusercontent.com/u/108354837?s=400&u=ed042c73c404e96b9f572d3530fc8abf7906d867&v=4" width=115><br><sub>Wendy Arcila</sub>](https://github.com/WendyArcila)
