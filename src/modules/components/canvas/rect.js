class Rect {
  constructor(opt) {
    this.__opt__ = opt;
  }

  init() {
    this.draw();
  }

  draw() {
    let {
      ctx, x, y, width, height
    } = this.__opt__;

    ctx.beginPath();
    ctx.strokeRect(x,y,width,height);
  }
}

module.exports = Rect;