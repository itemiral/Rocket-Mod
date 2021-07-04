// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;
      this.moveSpeed = 2;
      this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
    }
    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // mouse controls ()
        if(!this.isFiring) {
            if ((mouseX.x >= 40 && mouseX.x <= 320) && (mouseY.y <= 480 && mouseY.y >= 0) && this.x >= 47){
                this.x -= 2; 
            } else if ((mouseX.x >= 320 && mouseX.x <= 614) && this.x <= 578){
                this.x += 2; 
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring || mouseClick.isDown) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
            if ((mouseX.x >= 40 && mouseX.x <= 320) && (mouseY.y <= 480 && mouseY.y >= 0) && this.x >= 47){
                this.x -= 2; 
            } else if ((mouseX.x >= 320 && mouseX.x <= 614) && this.x <= 578){
                this.x += 2; 
            }
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }
    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}