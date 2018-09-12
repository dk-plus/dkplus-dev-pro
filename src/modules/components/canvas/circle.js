class Circle {
  constructor(opt) {
    this.__opt__ = opt;
  }

  init() {
    this.draw();
  }

  draw() {
    let {
      ctx, x, y, r, begin, end
    } = this.__opt__;
    begin = degToArc(begin);
    end = degToArc(end);

    ctx.beginPath();
    ctx.arc(x, y, r, begin, end);
    ctx.stroke();
  }
}

function degToArc(deg) {
  return Math.PI / 180 * deg;
}
function arcToDeg(arc) {
  return 180 / Math.PI * arc
}

module.exports = Circle;