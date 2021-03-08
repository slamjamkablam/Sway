levels.gameOver = function(){};
levels.gameOver.prototype ={

    preload: function(){},

    create: function(){
        game.stage.backgroundColor = '#ffffff';
        game.add.text(125, 100, 'Game Over', {fontSize: '50px', fill: '#000000'});
        game.add.text(65, 250, "Your score is " + score,{fontSize: '50px', fill: '#000000'});
        game.add.text(65, 350, "Press <- to restart",{fontSize: '50px', fill: '#000000'});
        music.stop();
    },
    update: function(){
      if (cursors.left.isDown){
        game.time.reset();
        game.state.start('level1');
    }
    }
}

   