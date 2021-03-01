var levels =  {};

var vel = 200;
var skyBG;
var player;
var cloud;
var cloud1;
var cloud2;
var cloud3;
var cloud4;
var counter= 0;
var music;
levels.level1 = function(){};
levels.level1.prototype ={
    
    preload: function(){
        game.load.image('skyBG', 'assets/backgrounds/sky.png',600,800);
        game.load.image('player', 'assets/sprites/player.png');
        game.load.image('cloud', 'assets/sprites/cloud.png');
        game.load.image('cloud1', 'assets/sprites/1.png');
        game.load.audio('music', 'assets/sounds/Swayv2.mp3');
    },
    
    
    create: function(){
        
        music = game.add.audio('music');
        music.loop = true;
        music.play();
      
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
      
        
        game.world.setBounds(0,0,500,600);
          
        skyBG = game.add.tileSprite(0,0,500,600,'skyBG');
        
        player = game.add.sprite(300,500,'player');
        game.physics.enable(player);
        player.body.collideWorldBounds=true;
        player.scale.set(.3);
        player.anchor.set(.5);
        
        
        
        
        //turn into cloud group with loop
        //also maybe make a function for this? 
        cloud1 =  game.add.sprite(game.world.randomX, -50,'cloud');
        cloud = game.add.sprite(game.world.randomX, -100,'cloud');
        cloud2 =  game.add.sprite(game.world.randomX, -160,'cloud');
        cloud3 = game.add.sprite(game.world.randomX, -250,'cloud');
        
        
      
            
        
        cloud.scale.set(.1);
        cloud1.scale.set(.1);
        cloud2.scale.set(.1);
        cloud3.scale.set(.1);   
        
        game.physics.enable(cloud1);
        game.physics.enable(cloud);
        game.physics.enable(cloud2);
        game.physics.enable(cloud3);
        
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        
        skyBG.tilePosition.y+= 2;
        
        
        cloud.body.y +=2;
        cloud1.body.y +=2;
        cloud2.body.y +=2;
        cloud3.body.y +=2;
        checkMovement();
        checkCloud();
    }


};
    function checkCloud(){
        if(cloud.body.y >= 600){
            cloud.body.y = -100;
            cloud.body.x = game.world.randomX;
            counter = 1;
        }
        
        if(cloud1.body.y >= 600){
            cloud1.body.y = -150;
            cloud1.body.x = game.world.randomX;
        }
        if(cloud2.body.y >= 600){
            cloud2.body.y = -200;
            cloud2.body.x = game.world.randomX;
        }
        
        if(cloud3.body.y >= 600){
            cloud3.body.y = -70;
            cloud3.body.x = game.world.randomX;
        }
          

    }
    function checkMovement(){

        
    if (cursors.left.isUp){
        player.body.velocity.x = vel;
    }
        
    if (cursors.left.isDown){
        player.body.velocity.x = -vel;
    }

}


