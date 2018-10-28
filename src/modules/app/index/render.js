/**
 * 总渲染模块
 */
const $ = require('jquery');
const artT = require('art-template');
// const BouncingBall = require('../../components/bouncing_ball/bouncing_ball.js');
const Resume = require('../../components/resume/resume.js');

require('./index.less');

const Render = (() => {
  const _e = {};

  let data = {
    title: 'resume-generator'
  };

  _e.init = () => {
    console.log('render init...');
    render();
    // BouncingBall.init();
    Resume.init();
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  return _e;
})();

module.exports = Render;