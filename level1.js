var levels =  {};

var vel = 200;
var skyBG;
var player;

levels.level1 = function(){};
levels.level1.prototype ={
    
    preload: function(){
        game.load.image('skyBG', 'assets/backgrounds/sky.png',600,800);
        game.load.image('player', 'assets/sprites/player.png');
    },
    
    create: function(){
        
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
      
        
        game.world.setBounds(0,0,500,600);
          
        skyBG = game.add.tileSprite(0,0,500,600,'skyBG');
        player = game.add.sprite(300,500,'player');
        game.physics.enable(player);
        
        player.body.collideWorldBounds=true;
        player.scale.set(.3);
        player.anchor.set(.5);
        
        
        
        
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        
        skyBG.tilePosition.y+=2;
        
        checkMovement();
    }


};

    function checkMovement(){

        
    if (cursors..isUp){
        player.body.velocity.x = vel;
    }
        
    if (cursors.left.isDown){
        player.body.velocity.x = -vel;
    }

    }


