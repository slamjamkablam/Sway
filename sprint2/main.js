var game = new Phaser.Game(500, 600, Phaser.AUTO);
game.state.add('level1', levels.level1);
game.state.add('gameOver',levels.gameOver);






game.state.start('level1');

