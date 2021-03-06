// Some constants for easier reference
var C = {
    canvas_width : 505
};

// Enemies our player must avoid
var Enemy = function(startY) {
    
    this.sprite = 'images/enemy-bug.png';
    this.y = startY;
    this.speed = this.getRandomInt(50, 300);
};



Enemy.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Y axis point 140, 225, 310
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

// Player is created and set in her start position. She is able to move by arrow key.
var Player = function() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 480;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    if (!this.sprite_img) {
        this.sprite_img = Resources.get(this.sprite);
        this.width = this.sprite_img.width;
        this.maxWidth = 402;
        this.minWidth = 0;
        this.height = this.sprite_img.height;
        this.maxHeight = 480;
        this.minHeight = 100;
        this.heightMove = this.height / 2;
        this.widthMove = this.width;
    }
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
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

function startEnemies() {
    allEnemies = [new Enemy(140),
                    new Enemy(225),
                    new Enemy(310)];
};

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

startEnemies();
