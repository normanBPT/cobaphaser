import { Scene } from "phaser";

class Game extends Scene {
  preload() {}

  create() {
    const middleX = this.game.config.width / 2;
    const middleY = this.game.config.height / 2;

    this.bola = this.add.circle(middleX, middleY, 10, 0xff0000, 1);
    this.physics.add.existing(this.bola);
    this.bola.body.setBounce(1, 1);
    this.bola.body.setCollideWorldBounds(true, 1, 1);
    this.bola.body.setVelocity(-200, 0);

    this.papanKiri = this.add.rectangle(50, middleY, 25, 100, 0xffffff, 1);
    this.physics.add.existing(this.papanKiri, true);
    // this.papanKiri.body.setCollideWorldBounds(true);

    this.physics.add.collider(this.papanKiri, this.bola);

    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor);
  }

  update() {
    if (this.cursor.up.isDown) {
      this.movePaddleUp(this.papanKiri);
    }

    if (this.cursor.down.isDown) {
      this.movePaddleDown(this.papanKiri);
    }

    if (
      this.papanKiri.y + this.papanKiri.height / 2 ===
      this.game.config.height
    ) {
      console.log("ujung bawah");
    }

    if (this.papanKiri.y - this.papanKiri.height / 2 === 0) {
      console.log("ujung atas");
    }
  }

  movePaddleUp(obj) {
    obj.y -= 5;
    obj.body.y -= 5;
  }

  movePaddleDown(obj) {
    obj.y += 5;
    obj.body.y += 5;
  }
}

export default Game;
