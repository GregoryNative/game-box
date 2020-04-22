import Const from "../constants";

function Grid(p) {
  this.p = p;
}

Grid.prototype.draw = function () {
  this.p.background(255);

  for(let i=0; i < Const.WINDOW_SIZE; i+=Const.GRID_SIZE) {
    this.p.line(0,i, Const.WINDOW_SIZE,i);
    this.p.line(i,0, i,Const.WINDOW_SIZE);
  }
}

export default Grid;