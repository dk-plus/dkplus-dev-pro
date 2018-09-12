const $ = require('jquery');

class Listener {
  constructor(opt) {
    this.__opt__ = opt;
  }

  init() {
    let {
      ele
    } = this.__opt__;
    this.listen();
  }

  listen() {
    let {
      ele, downCallback, moveCallback, upCallback
    } = this.__opt__;

    $(ele).on('mousedown', (e) => {
      isDrawing = true;
      downCallback();
    })
    $(ele).on('mousemove', (e) => {
      if (isDrawing === false) {
        return
      }
      moveCallback();
    })
    $(ele).on('mouseup', (e) => {
      isDrawing = false;
      upCallback();
    })
  }
}

module.exports = Listener;