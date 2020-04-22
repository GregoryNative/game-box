function Snake(p, { size, window }) {
  this.p = p;

  this.size = size;
  this.window = window;

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
}

Snake.prototype.direction = function(xspeed, yspeed) {
  this.xspeed = xspeed;
  this.yspeed = yspeed;
}

Snake.prototype.update = function() {
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
  this.p.rect(this.x, this.y, this.size, this.size);
}

export default Snake;