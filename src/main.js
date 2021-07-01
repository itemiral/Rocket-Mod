/*
Izat Temiraliev
itemiral@ucsc.edu
Bombardier Beetle is shooting Colorado Beetles because he's angry at them.
Took me around 8 hours to complete.
07/01/2021

Points Breakdown:
Shrek Tier, Redesign - 60pts
Players can control the projectile after shooting - 5 pts
Created my own music for background using Chrome Labs - 5 pts
Changed the art of borders - 10 pts
Finished tutorial - 20 pts
*/


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);

//sets UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
