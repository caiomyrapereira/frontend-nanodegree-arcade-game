// Enemies our player must avoid
var Enemy = function(x , y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x>470){
    this.x = -40
    }
    this.x += dt * 50*Math.random()*10 ;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player(){

     this.x = 200;
     this.y = 400;

     this.sprite = 'images/char-boy.png';
     
     this.update = function(dt){
    //
     }
     this.handleInput = function( inputvalue ){
        console.log(inputvalue )
        switch( inputvalue ){
            case 'left':
            this.x -= 30;
            break;
            case 'right':
            this.x += 30;
            break;
            case 'up': 
            this.y -= 30;
            break;
            case 'down':
              this.y += 30;
            break;
        } 
     }
     
}

Player.prototype = Enemy.prototype;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(0,50) ,new Enemy(100,135),new Enemy(0,225)];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
