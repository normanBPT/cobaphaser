import { Scene } from "phaser";

class Game extends Scene {
  preload() {}

  create() {

    

    const bola = this.add.circle(0, 0, 10, 0XFF0000, 1);
    bola.x = this.game.config.width / 2;
    bola.y = this.game.config.height / 2;
    bola.setOrigin(0.5, 0.5);

    this.physics.add.existing(bola);


  }
}

export default Game;
