import Base from './base';

function Snake(p, options) {
  Base.call(this, p, options);

  this.window = options.window;

  this.xspeed = 1;
  this.yspeed = 0;

  this.length = 0;
  this.tail = [];
}

Snake.prototype.direction = function(xspeed, yspeed) {
  if (this.canChangeDirection(xspeed, yspeed)) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }
}

Snake.prototype.canEat = function(food) {
  return this.p.dist(this.x, this.y, food.x, food.y) < 1;
}

Snake.prototype.isNotAlive = function() {
  return this.tail.some(tailItem =>
    this.p.dist(this.x, this.y, tailItem.x, tailItem.y) < 1
  );
}

Snake.prototype.canChangeDirection = function(xspeed, yspeed) {
  if (this.tail.length > 0) {
    return xspeed + this.xspeed !== 0 || yspeed + this.yspeed !== 0;
  }

  return true;
}

Snake.prototype.getScore = function() {
  return this.length;
}

Snake.prototype.eat = function() {
  this.length++;
}

Snake.prototype.death = function() {
  this.length = 0;
  this.tail = [];
}

Snake.prototype.update = function() {
  if (this.length === this.tail.length)
    for (let i = 0; i < this.tail.length - 1; i++)
      this.tail[i] = this.tail[i + 1];

  this.tail[this.length - 1] = this.p.createVector(this.x, this.y);

  const x = this.x + this.xspeed * this.size;
  if (this.xspeed === 1) {
    this.x = x % this.window;
  } else if (this.xspeed === -1) {
    if (x < 0) {
      this.x = this.window - this.size;
    } else {
      this.x = x;
    }
  }

  const y = this.y + this.yspeed * this.size;
  if (this.yspeed === 1) {
    this.y = y % this.window;
  } else if (this.yspeed === -1) {
    if (y < 0) {
      this.y = this.window - this.size;
    } else {
      this.y = y;
    }
  }
}

Snake.prototype.draw = function() {
  this.p.fill('rgb(0,255,0)');

  for (let i = 0; i < this.tail.length; i++)
    this.p.rect(this.tail[i].x, this.tail[i].y, this.size, this.size);

  this.p.rect(this.x, this.y, this.size, this.size);
}

export default Snake;