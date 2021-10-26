import Phaser from 'phaser';

import TitleScreen from './scenes/TitleScreen';
import GameScene from './scenes/Game'


const game = new Phaser.Game({
    width: 450,
    height: 500,
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 0},
            debug: true
            
        }
    }
});

game.scene.add("titlescreen", GameScene);

game.scene.start("titlescreen");