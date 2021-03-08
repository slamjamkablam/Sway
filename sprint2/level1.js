var levels =  {};

var vel = 200;
var skyBG;
var player;
var clouds;
var cloudGroup;
var counter= 0;
var music;
var score;
var pace;
var shield = false;
var scoreText;
levels.level1 = function(){};
levels.level1.prototype ={

    
    preload: function(){
        game.load.image('skyBG', 'assets/backgrounds/sky.png',600,800);
        game.load.spritesheet('player', 'assets/spritesheets/umbrellaMan.png', 260, 235);
        game.load.image('cloud', 'assets/sprites/cloud.png');
        game.load.audio('music', 'assets/sounds/Swayv3.mp3');
    },
    
    
    create: function(){
        
        //music
        music = game.add.audio('music');
        music.loop = true;
        music.play();
      
        //physics, gameWorld, Background

        game.physics.startSystem(Phaser.Physics.ARCADE);
        

        game.world.setBounds(0,0,500,600);   
        skyBG = game.add.tileSprite(0,0,500,600,'skyBG');
        
        //UmbrellaMan 
        player = game.add.sprite(300,500,'player',1);
        game.physics.enable(player);
        player.body.collideWorldBounds=true;
        player.scale.set(.3);
        player.anchor.set(.5);
        player.animations.add('right', [1,2,3]);
        player.animations.add('left', [4,5,6]);
        
        
        //cloudy cloud clouds
        cloudGroup = game.add.group();
        for (i =0; i<5; i++){
            cloud = game.add.sprite(game.world.randomX,game.rnd.integerInRange(-1000,-100), 'cloud');
            cloud.scale.set(.1);
            cloudGroup.add(cloud);
        }
        
        game.physics.enable([player, cloudGroup]);
        
        cloudGroup.forEach(function(cloudInCloudGroup)
        {
            cloudInCloudGroup.body.setSize(680,215,0, 150);
            game.debug.body(cloudInCloudGroup);
            
       })
        
        //change player hitbox
        player.body.setSize(125, 190, 65, 20);
    
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        cursors = game.input.keyboard.createCursorKeys();
    },
    
        
    update: function(){
        game.debug.body(player);
        
        //changing speed 
        if (game.time.totalElapsedSeconds() < 10){
            pace = 2;
        }
        else {
            pace = 2 + game.time.totalElapsedSeconds()/20;
        }
        
        //score
        score = Math.round(game.time.totalElapsedSeconds()*10);
        scoreText.text = 'Score: ' + score; 
        
        skyBG.tilePosition.y += pace; 
        

        //
        if (game.physics.arcade.overlap(player,cloudGroup)){
            console.log("game over! your score is " + score);
            game.state.start('gameOver');
        }
        

        
        //looping through each cloud in cloudGroup   end goal: clouds descending
        cloudGroup.forEach(function(cloudInCloudGroup)
        {
            cloudInCloudGroup.y += pace;
            game.debug.body(cloudInCloudGroup);
        })
        checkClouds();
        checkMovement(); 
    }

}
    function checkClouds(){
        cloudGroup.forEach(function(c){
          if (c.y >600){
              console.log('cloudReset');
              c.y = game.rnd.integerInRange(-500,0);
          }  
        })
    }

    function checkMovement(){
 
        if (cursors.left.isUp){
            player.body.velocity.x = vel;
            player.angle = 10;
            player.animations.play('right',4,true);
        }        
        if (cursors.left.isDown){
            player.body.velocity.x = -vel;
            player.angle = -10;
            player.animations.play('left',4,true);
        }

}



