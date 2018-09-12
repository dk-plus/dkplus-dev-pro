const Line = require('./line.js');
const Rect = require('./rect.js');
const Circle = require('./circle.js');

class Shape {
  constructor(opt) {
    this.__opt__ = opt;
  }

  init() {
    let {
      type, x1, y1, x2, y2
    } = this.__opt__;
  }


  draw(opt) {
    if (opt.type === 'circle') {
      this.drawCircle();
    }
  }

  drawLine() {}

  drawRect() {}

  drawCircle() {
  }
}

module.exports = Shape;
