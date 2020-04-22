function Food(p, { size, position }) {
  this.p = p;

  this.size = size;

  this.x = position.x;
  this.y = position.y;
}

Food.prototype.draw = function () {
  this.p.fill('red');
  this.p.rect(this.x, this.y, this.size, this.size);
}

export default Food;