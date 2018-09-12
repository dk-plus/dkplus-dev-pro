const $ = require('jquery');
const artT = require('art-template');

const CanvasDraw = require('../../components/canvas/canvas.js');
const Utils = require('../../lib/utils.js');

require('./index.less');

!(() => {
  console.log('%cdkplus-', `
    background: #cacaca;
    padding: 0 5px;
    border-radius: 50px 150px 10px 50px;
    font-size: 14px;
    color: #fff;
  `);
  console.log('%cdev-pro', `
    background: #16c716;
    padding: 0 5px;
    border-radius: 10px 10px 50px 50px;
    font-size: 14px;
    color: #fff;
  `);

  let data = {
    title: 'resume-generator'
  };

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);
    $('#root').html(tplRender(data));
  }

  render();
  CanvasDraw.init();
})();