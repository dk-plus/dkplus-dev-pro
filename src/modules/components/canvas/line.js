class Line {
  constructor(opt) {
    this.__opt__ = opt;
  }

  init() {
    this.draw();
  }

  draw() {
    let {
      ctx, x1, y1, x2, y2
    } = this.__opt__;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

module.exports = Line;