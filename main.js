import Phaser from "phaser"
import { LoadingScene } from "./scenes/LoadingScene.js"
import { TitleScreen } from "./scenes/TitleScreen.js"
import { Level1Scene } from "./scenes/Level1Scene.js"
import { UIScene } from "./scenes/UIScene.js"
import { VictoryUIScene } from "./scenes/VictoryUIScene.js"
import { GameCompleteUIScene } from "./scenes/GameCompleteUIScene.js"
import { GameOverUIScene } from "./scenes/GameOverUIScene.js"
import gameConfig from "./gameConfig.json"

const config = {
  type: Phaser.AUTO,
  width: gameConfig.screenSize.width.value,
  height: gameConfig.screenSize.height.value,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: gameConfig.debugConfig.debug.value,
      debugShowBody: gameConfig.debugConfig.debugShowBody.value,
      debugShowStaticBody: gameConfig.debugConfig.debugShowStaticBody.value,
      debugShowVelocity: gameConfig.debugConfig.debugShowVelocity.value,
    },
  },
  pixelArt: gameConfig.renderConfig.pixelArt.value,
  scene: [
    LoadingScene,
    TitleScreen,
    Level1Scene,
    UIScene,
    VictoryUIScene,
    GameCompleteUIScene,
    GameOverUIScene
  ],
}

export default new Phaser.Game(config)
