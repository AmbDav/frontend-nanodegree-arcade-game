// Some constants for easier reference
var C = {
    canvas_width : 505
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enemies our player must avoid
var Enemy = function(startY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.y = startY;
    this.speed = getRandomInt(50, 300);
};
// Y axis point 50, 140, 225
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (!this.sprite_img) {
        this.sprite_img = Resources.get(this.sprite);
        this.starting_x_pos = -this.sprite_img.width;
        this.width = -this.starting_x_pos;
        this.height = this.sprite_img.height;
        this.x = this.starting_x_pos;
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < C.canvas_width) {
        this.x += this.speed * dt;
    } else {
        this.x = this.starting_x_pos;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 380;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    if (!this.sprite_img) {
        this.sprite_img = Resources.get(this.sprite);
        this.width = this.sprite_img.width
        this.maxWidth = 402;
        this.minWidth = 0
        this.height = this.sprite_img.height;
        this.maxHeight = 380;
        this.minHeight = 0
        this.heightMove = this.height / 2;
        this.widthMove = this.width;
    }
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
//Not checking key right now and might not need to


    if (key == 'right' && this.x < this.maxWidth) {
        this.x = this.x + this.widthMove;
    } else if (key == 'left' && this.x > this.minWidth) {
        this.x = this.x - this.widthMove;
    } else if (key == 'down' && this.y < this.maxHeight) {
        this.y = this.y + this.heightMove;
    } else if (key == 'up' && this.y > this.minHeight) {
        this.y = this.y - this.heightMove;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

allEnemies = [new Enemy(50),
                new Enemy(140),
                new Enemy(225)];
player = new Player();

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
