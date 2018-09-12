const $ = require('jquery');
const artT = require('art-template');

class Line {
  // 构造函数
  constructor(option) {
    this.option = option;
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

module.exports = Line;