function Snake(p, { size, window }) {
  this.p = p;

  this.size = size;
  this.window = window;

  this.x = 0;
  this.y = 0;
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

Snake.prototype.canChangeDirection = function(xspeed, yspeed) {
  if (this.tail.length > 0) {
    return xspeed + this.xspeed !== 0 || yspeed + this.yspeed !== 0;
  }

  return true;
}

Snake.prototype.eat = function() {
  this.length++;
  // document.title = `Snake length: ${this.length}`;
}

Snake.prototype.death = function() {
  for (let i = 0; i < this.tail.length; i++) {
    if (this.p.dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 1) {
      console.log('stop')
      this.length = 0;
      this.tail = [];
      break;
    }
  }
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