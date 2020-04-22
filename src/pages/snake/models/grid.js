import Const from "../constants";

function Grid(p, options) {
  this.p = p;
  this.options = options;
}

Grid.prototype.draw = function () {
  this.p.background(255);

  for(let i=0; i < this.options.WINDOW_SIZE; i+=this.options.GRID_SIZE) {
    this.p.line(0,i, this.options.WINDOW_SIZE,i);
    this.p.line(i,0, i,this.options.WINDOW_SIZE);
  }
}

export default Grid;