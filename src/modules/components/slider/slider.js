const Slider = (() => {

  // 该模块
  const _e = {
    WRAPPER: {
      WIDTH: 400,
      HEIGHT: 300,
      PAGE_SIZE: 5,
    }
  };

  // 全局操作数据
  const _g = {
    // 操作dom
    ele: {
      root: '',
      wrapper: '',
      slide: '',
    },
    // 渲染数据
    data: {
      cur: 0, // 当前页
    },
  }

  // 初始化
  _e.init = () => {
    render();
  }

  // 上一页
  _e.prev = () => {
    _g.data.cur--;
    if (_g.data.cur < 1) _g.data.cur = _e.WRAPPER.PAGE_SIZE;
    _e.jumpTo(_g.data.cur);
  }

  // 下一页
  _e.next = () => {
    _g.data.cur++;
    if (_g.data.cur > _e.WRAPPER.PAGE_SIZE) _g.data.cur = 1;
    _e.jumpTo(_g.data.cur);
  }

  // 跳到某一页
  _e.jumpTo = (page) => {
    $(_g.ele.wrapper).style.transform = `translate(${page*_e.WRAPPER.WIDTH}px)`;
  }

  // 播放
  _e.play = () => {}

  // 暂停
  _e.pause = () => {}

  // 渲染函数
  function render() {
  }

  return _e;

})();

function $(ele){
  return document.querySelector(ele);
}

module.exports = Slider;
