var game = new Phaser.Game(500, 600, Phaser.AUTO);
game.state.add('level1', levels.level1);


game.state.start('level1');
