import { Game } from './escenas/game.js'

 
 // tamaño,  física y  escenas.
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [Game]
};

const game = new Phaser.Game(config);

