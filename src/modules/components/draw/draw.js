const $ = require('jquery');
const artT = require('art-template');

class Draw {
  // 构造函数
  constructor(option) {
    this.option = option;
    this.ctx = init(this.option);
    this.state = {
      drawLine: false,
    }
  }

  clear() {
    let {
      ctx, option
    } = this;
    ctx.clearRect(0, 0, option.width, option.height);
  }

  drawLine(option) {
    let {ctx} = this;
    let {
      x1, y1, x2, y2,
    } = option;

    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  getPointA(e, opt) {
    opt.x1 = e.pageX;
    opt.y1 = e.pageY;
  }

  getPointB(e, opt) {
    opt.x2 = e.pageX;
    opt.y2 = e.pageY;
  }

  onDrawLine() {
    this.state.drawLine = true;
    let {
      option, getPointA, getPointB,
    } = this;
    let _opt = {};
    let state = {
      move: false,
    }

    $(option.ele).on('mousedown', (e) => {
      if (!this.state.drawLine) {
        // console.log('取消划线监听1');
        return;
      }
      getPointA(e, _opt);
      state.move = true;
    });
    $(option.ele).on('mousemove', (e) => {
      if (!this.state.drawLine) {
        // console.log('取消划线监听2');
        return;
      }
      if (!state.move) {
        return;
      }
      this.clear();
      getPointB(e, _opt);
      this.drawLine(_opt);
    });
    $(option.ele).on('mouseup', (e) => {
      if (!this.state.drawLine) {
        // console.log('取消划线监听2');
        return;
      }
      getPointB(e, _opt);
      this.drawLine(_opt);
      state.move = false;
    });
  }

  offDrawLine() {
    this.state.drawLine = false;
    console.log('取消划线监听');
  }

  // 原型方法，由Draw生产的对象直接调用
  doSomething() {
    console.log('do sth 1');
  }

  // 静态方法，可通过Draw类直接调用
  static doSomething() {
    console.log('do sth 2');
  }

  // set方法，改变option值触发
  set option(opt) {
    this._option = opt;
  }

  // get方法，读取option值触发
  get option() {
    return this._option;
  }
}

function init(option) {
  let {
    ele, width, height,
  } = option;

  let canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext('2d');

  $(ele).append(canvas);

  return ctx;
}

module.exports = Draw;