const $ = require('jquery');
const artT = require('art-template');

const Wrapper = require('./wrapper/wrapper.js');
const List = require('./list/list.js');
const Fragment = require('./fragment/fragment.js');
const Paragraph = require('./paragraph/paragraph.js');
const KeyValueMap = require('./key_value_map/key_value_map.js');
const MixTitle = require('./title/title.js');

const Resume = (() => {

  // 该模块
  const _e = {};

  // 操作dom
  const ele = {
    ROOT: '#test',
  };

  // 全局操作数据
  const _g = {
    // 渲染数据
    data: {
      title: 'hello resume'
    },
  };

  const wrapperForm = [{
    id: '#ul-list',
    title: 'ul-list列表',
    content: List.render({
      type: 'ul',
      data: [
        'this is first',
        'this is sec',
        'this is third',
      ]
    }),
  }, {
    id: '#ol-list',
    title: 'ol-list列表',
    content: List.render({
      type: 'ol',
      data: [
        'this is first',
        'this is sec',
        'this is third',
      ]
    }),
  }, {
    id: '#tag-list',
    title: 'tag-list列表',
    content: List.render({
      type: 'tag',
      data: [
        'tag1',
        'tag2--1',
        'tag333333',
        'tag4',
      ]
    }),
  }, {
    id: '#mix-list',
    title: 'mix-混合内容',
      content: Fragment.render({
        data: [List.render({
          type: 'tag',
          data: [
            'tag1',
            'tag2--1',
            'tag333333',
            'tag4',
          ]
        }), List.render({
          type: 'ol',
          data: [
            'this is first',
            'this is sec',
            'this is third',
          ]
        })]
      }),
  }, {
    id: '#para-list',
    title: 'para-list列表',
    content: Paragraph.render({
      // type: 'quote',
      data: [
        'this paragragh 1',
        'this paragragh 2',
        'this paragragh 3',
        'this paragragh 4',
      ]
    }),
  }, {
    id: '#quote-list',
      title: 'quote-list列表',
    content: Paragraph.render({
      type: 'quote',
      data: [
        'this quote 1',
        'this quote 2',
        'this quote 3',
        'this quote 4',
      ]
    }),
  }, {
    id: '#key-value-map-list',
      title: 'key-value-map-list列表',
    content: KeyValueMap.render({
      type: 'text',
      data: [{
        key: '地址',
        value: '迎龙路广东金融学院'
      }, {
        key: '邮箱',
        value: 'dkplus@qq.com',
        type: 'link',
      }, {
        key: '手机',
        value: '135-5613-0815'
      }]
    }),
  }, {
    id: '#progress-list',
    title: 'progress-list列表',
    content: KeyValueMap.render({
      type: 'progress',
      data: [{
        key: 'html',
        value: 50
      }, {
        key: 'js',
        value: 70,
      }, {
        key: 'css',
        value: 20
      }]
    }),
  }, {
    id: '#mix-title',
    title: 'mix-title列表',
    content: MixTitle.render({
      size: 'normal',
      data: {
        title: '阿里巴巴',
        extra: '2018-01 - 至今',
      }
    }),
  }];

  // 枚举
  const ENUM = {};

  // 开发配置
  const config = {
    mockMode: true,
  }

  // 初始化
  _e.init = () => {
    render();
    renderWrapperForm();
  }

  // 渲染函数
  function render() {
    const tpl = require('./resume.tpl')();
    const tplRender = artT.compile(tpl);

    $(ele.ROOT).html(tplRender(_g.data));
  }

  function renderWrapperForm() {
    wrapperForm.forEach((item) => {
      const { id, title, content } = item;
      new Wrapper({
        id, title, content
      })
    });
  }

  // 初始化事件
  function initEvent() { }

  return _e;

})();

module.exports = Resume;
