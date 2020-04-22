function Snake(p, { size }) {
  this.p = p;

  this.size = size;

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
}

Snake.prototype.update = function () {
  this.x = this.x + this.xspeed * this.size;
  this.y = this.y + this.yspeed * this.size;
}

Snake.prototype.draw = function () {
  this.p.fill('rgb(0,255,0)');
  this.p.rect(this.x, this.y, this.size, this.size);
}

export default Snake;