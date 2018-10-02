/**
 * 总渲染模块
 */
const $ = require('jquery');
const artT = require('art-template');

require('./index.less');

const Render = (() => {
  const _e = {};

  let data = {
    title: 'resume-generator'
  };

  _e.init = () => {
    console.log('render init...');
    render();
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  return _e;
})();

module.exports = Render;