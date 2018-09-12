const $ = require('jquery');

class Layer {
  constructor(opt) {
    this.__opt__ = opt;
    this.init();
  }

  init() {
    this.createLayer();
  }

  createLayer() {
    let {
      ele, width, height
    } = this.__opt__;

    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    $(ele).append(canvas);
    $(ele).css({
      position: 'relative',
      width: width,
      height: height,
      border: '1px solid'
    });
    $(canvas).css({
      position: 'absolute'
    });
    this.__opt__.canvas = canvas;
    this.__opt__.ctx = canvas.getContext('2d');
  }

  add(ele) {
    let {ctx} = this.__opt__;
    ele.__opt__.ctx = ctx;
    ele.init();
  };

  clear() {
    let {
      ctx, width, height
    } = this.__opt__;
    ctx.clearRect(0,0,width,height);
  }

  preview(ele) {
    this.clear();
    this.add(ele);
  }
}

module.exports = Layer;