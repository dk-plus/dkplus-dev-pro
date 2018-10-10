require('./bouncing_ball.less');
const BouncingBall = (() => {
  const _e = {};

  const ele = {
    ROOT: '#test',
    CANVAS_WRAPPER: null,
  }

  const _g = {
    ctx: null,
  }

  // 初始化
  _e.init = () => {
    console.log('bouncing ball');
    createCanvas({
      id: 'bcball',
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log(ele.CANVAS_WRAPPER);
    initDraw();
    initEvent();
  }

  function initDraw() {
    line({
      x1: 100,
      y1: 30,
      x2: 50,
      y2: 90,
      color: '#00ff00',
      bg: '#888'
    });
    rect({
      x: 100,
      y: 50,
      width: 200,
      height: 90,
      color: '#000',
      bg: '#00ff00'
    });
    circle({
      x: 50,
      y: 50,
      r: 10,
      begin: 0,
      end: 360
    });
  }

  // 创建画板
  function createCanvas(opt) {
    const {
      id, width, height
    } = opt;

    ele.CANVAS_WRAPPER = document.createElement('canvas');
    ele.CANVAS_WRAPPER.id = id;
    ele.CANVAS_WRAPPER.width = width;
    ele.CANVAS_WRAPPER.height = height;
    $(ele.ROOT).appendChild(ele.CANVAS_WRAPPER);

    _g.ctx = ele.CANVAS_WRAPPER.getContext('2d');
  }

  // 绘制
  function draw(opt) {
    const { ctx } = _g;
    const { callback } = opt;
    ctx.beginPath();
    callback && typeof callback === 'function' && callback(ctx);
    ctx.stroke();
    ctx.fill();
  }

  // 绘制线条
  function line(opt) {
    const {
      x1, y1, x2, y2, color, bg
    } = opt;
    draw({
      callback: function (ctx) {
        setAttr({
          color, bg, ctx
        });
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
    });
  }

  // 矩形
  function rect(opt) {
    const {
      x, y, width, height, color, bg
    } = opt;
    draw({
      callback: function (ctx) {
        setAttr({
          color, bg, ctx
        });
        ctx.strokeRect(x, y, width, height);
        ctx.fillRect(x, y, width, height);
      }
    });
  }

  // 圆形
  function circle(opt) {
    let {
      x, y, r, begin, end, color, bg
    } = opt;
    begin = degToArc(begin);
    end = degToArc(end);
    draw({
      callback: function (ctx) {
        setAttr({
          color, bg, ctx
        });
        ctx.arc(x, y, r, begin, end);
      }
    });
  }

  function degToArc(deg) {
    return Math.PI / 180 * deg;
  }
  function arcToDeg(arc) {
    return 180 / Math.PI * arc
  }

  // 设置属性
  function setAttr(opt) {
    const { color, bg, ctx } = opt;
    color && (ctx.strokeStyle = color) || (ctx.strokeStyle = null);
    bg && (ctx.fillStyle = bg) || (ctx.fillStyle = null);
  }

  // $函数
  function $(element) {
    return document.querySelector(element);
  }

  function getPoint() {
    const screen = {
      x1: undefined,
      y1: undefined,
      x2: undefined,
      y2: undefined,
    }
    $(`#${ele.CANVAS_WRAPPER.id}`).addEventListener('mousedown', (e) => {
      screen.x1 = e.pageX;
      screen.y1 = e.pageY;
      console.log(screen)
    });
    // $(`#${ele.CANVAS_WRAPPER.id}`).addEventListener('mousemove', (e) => {
    //   screen.x2 = e.pageX;
    //   screen.y2 = e.pageY;
    //   console.log(screen)
    // });
    $(`#${ele.CANVAS_WRAPPER.id}`).addEventListener('mouseup', (e) => {
      screen.x2 = e.pageX;
      screen.y2 = e.pageY;
      console.log(screen)
    });
  }

  function initEvent() {
    window.addEventListener('resize', () => {
      ele.CANVAS_WRAPPER.width = window.innerWidth;
      ele.CANVAS_WRAPPER.height = window.innerHeight;
      initDraw();
    });
    getPoint();
  }

  return _e;
})();

module.exports = BouncingBall;