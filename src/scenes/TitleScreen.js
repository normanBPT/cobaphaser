import { Scene } from "phaser";

class TitleScreen extends Scene {
  preload() {}

  create() {
    const nama = this.add.text(0, 0, "Norman");
    nama.x = this.game.config.width / 2;
    nama.y = this.game.config.height / 2;
    nama.setOrigin(0.5, 0.5);
  }
}

export default TitleScreen;
