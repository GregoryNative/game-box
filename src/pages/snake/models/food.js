import Base from './base';

function Food(p, options) {
  Base.call(this, p, options);
}

Food.prototype.draw = function () {
  this.p.fill('red');
  this.p.rect(this.x, this.y, this.size, this.size);
}

export default Food;