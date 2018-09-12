const artT = require('art-template');
const $ = require('jquery');

const Layer = require('./layer.js');
const Line = require('./line.js');
const Rect = require('./rect.js');
const Circle = require('./circle.js');
const Shape = require('./shape.js');

const CanvasDraw = (() => {
  const _e = {};

  let _g = {
    ele: {
      root: '#test'
    },
    data: {
      title: 'dkplus-canvas'
    },
    config: {
      opt: {
        type: 'circle',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
      },
      isDrawing: false
    },
    history: []
  }

  _e.init = () => {
    render();
    let c = new Layer({
      ele: _g.ele.root,
      width: 300,
      height: 200
    });
    let c1 = new Layer({
      ele: _g.ele.root,
      width: 300,
      height: 200
    });
    let opt = {};
    let isDrawing = false;
    $('#test').on('mousedown', (e) => {
      isDrawing = true;
      opt.x = e.pageX;
      opt.y = e.pageY;
    })
    $('#test').on('mousemove', (e) => {
      if (isDrawing === false) {
        return
      }
      let width = e.pageX - opt.x;
      let height = e.pageY - opt.y;
      opt.r = Math.sqrt(width*width + height*height);
      opt.begin = 0;
      opt.end = 360;
      c1.preview(new Circle(opt));
    })
    $('#test').on('mouseleave', (e) => {
      isDrawing = false;
      let width = e.pageX - opt.x;
      let height = e.pageY - opt.y;
      opt.r = Math.sqrt(width * width + height * height);
      opt.begin = 0;
      opt.end = 360;
      c1.clear();
      c.add(new Circle(opt));
    })
    $('#test').on('mouseup', (e) => {
      isDrawing = false;
      let width = e.pageX - opt.x;
      let height = e.pageY - opt.y;
      opt.r = Math.sqrt(width * width + height * height);
      opt.begin = 0;
      opt.end = 360;
      c1.clear();
      c.add(new Circle(opt));
    })
  }

  function listen() {
    let $draw = $(_g.ele.root);
    let option = {};

    $draw.on('mousedown', (e) => {
      _g.config.isDrawing = true;
      option.x1 = e.pageX;
      option.y1 = e.pageY;
    });

    $draw.on('mousemove', (e) => {
      if (isDrawing === false) {
        return
      }
      option.x2 = e.pageX;
      option.y2 = e.pageY;
    });

    $draw.on('mouseleave', (e) => {
      _g.config.isDrawing = false;
      option.x2 = e.pageX;
      option.y2 = e.pageY;
    });

    $draw.on('mousemove', (e) => {
      _g.config.isDrawing = false;
      option.x2 = e.pageX;
      option.y2 = e.pageY;
    });
  }

  function render() {
    const tpl = require('./canvas.tpl')();
    const tplRender = artT.compile(tpl);

    $(_g.ele.root).html(tplRender(_g.data));
  }

  return _e;
})();

module.exports = CanvasDraw;