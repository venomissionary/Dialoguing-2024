/* Hernandez Steven
   2/28/2024
   CMPM 120
*/

// BE STRIK
"use strict"

// game config
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Title, Talking ]
}

const game = new Phaser.Game(config)

// globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let cursors = null
