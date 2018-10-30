
const List = require('./list/list.js');
const Fragment = require('./fragment/fragment.js');
const Paragraph = require('./paragraph/paragraph.js');
const KeyValueMap = require('./key_value_map/key_value_map.js');
const MixTitle = require('./title/title.js');
const Avater = require('./avater/avater.js');

module.exports = [{
  id: '#avater-info',
  title: '个人信息',
  content: Fragment.render({
    data: [
      Avater.render({
        type: 'circle-border',
        imgStyle: 'width-first',
        src: './images/test2.jpg',
        offsetX: 0,
        offsetY: 10,
        desc: '邓康',
      }),
      MixTitle.render({
        type: 'display-y',
        size: 'big',
        data: {
          type: 'default',
          title: '邓康',
        }
      }),
      MixTitle.render({
        type: 'display-y',
        size: 'small',
        data: {
          type: 'default',
          extra: '阿里前端实习生',
        }
      })
    ]
  })
}, {
    id: '#base-info',
    title: '基本信息',
    content: KeyValueMap.render({
      type: 'text',
      data: [{
        key: '性别',
        value: '男'
      }, {
        key: '地址',
        value: '天河区广东金融学院'
      }, {
        key: '邮箱',
        value: 'dkplus@qq.com',
      }, {
        key: '手机',
        value: '135-5613-0815'
      }, {
        key: '博客',
        value: 'www.cnblogs.com/dkplus',
        type: 'link',
      }, {
        key: 'github',
        value: 'github.com/dk-plus',
        type: 'link',
      }]
    }),
  }, {
    id: '#skill-info',
    title: '技能栏',
    content: KeyValueMap.render({
      type: 'progress',
      data: [{
        key: 'html',
        value: 90
      }, {
        key: 'css',
        value: 80,
      }, {
        key: 'js',
        value: 75
      }, {
        key: '组件化',
        value: 70
      }, {
        key: '移动端',
        value: 70
      }]
    }),
  }, {
    id: '#tag-info',
    title: '个人标签',
    content: List.render({
      type: 'tag',
      data: [
        '阿里前端1年',
        '英语六级',
        '组件化开发',
        '模块化开发',
        '移动端开发',
        '自带阿里体系',
        '能快速融入新业务',
      ]
    }),
  }, {
    id: '#job-exp',
    title: '实习经历',
    content: Fragment.render({
      data: [
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: '阿里巴巴-UC事业部-前端',
            extra: '2018-01~至今',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            '主要负责开发豌豆荚与pp助手的h5活动页、运营后台、内嵌页',
            '熟悉移动端开发，业务打点，关注用户体验',
            '熟悉项目工程化、模块化、组件化开发',
            '能根据具体业务拆分模块与组件',
          ]
        })
      ]
    }),
  }, {
    id: '#project-exp',
    title: '项目经历',
    content: Fragment.render({
      data: [
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: 'pp助手-世界杯活动',
            extra: '2018-05-21~06-01',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            'webpack工程化、模块化开发，模板引擎art-template，dom动画zepto',
            '活动内容：射点球游戏抽奖，根据抽奖结果、用户射门方向播放动画',
            '实现模块：资源预加载、规则渲染，动画播放、弹窗',
            '业务：应用曝光打点、下载、安装打点',
          ]
        }),
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: '豌豆荚-瀑布流评论组件',
            extra: '2018-09-21~09-27',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            '在原有的运营活动模板新增瀑布流组件',
            '实现模块：瀑布流、评论弹窗、分享弹窗、回流蒙层',
            '业务：点赞打点、评论打点、评论曝光打点、弹窗打点'
          ]
        }),
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: 'pp助手&豌豆荚-运营后台',
            extra: '2018-08~至今',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            '技术栈：Egg+React+dva+antd',
            '实现功能：旧后台迁移、评论批量导入、账号申诉管理',
            '实现组件：视频选择、推荐集弹窗等'
          ]
        }),
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: '其他上线项目',
            extra: '2018-01~至今',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            '寒假答题活动+春节动画活动',
            'pp助手内嵌页：下载随机送集分宝+其他小内嵌页',
          ]
        })
      ]
    }),
  }, {
    id: '#self-judge',
    title: '自我评价',
    content: Fragment.render({
      data: [
        MixTitle.render({
          type: 'default',
          size: 'normal',
          data: {
            type: 'default',
            title: '广东金融学院-电子商务-本科',
            extra: '2015-09~至今',
          }
        }),
        List.render({
          type: 'ol',
          data: [
            '学习前端半年后成为阿里前端，比大多数同届起点高',
            'html、css、js基础扎实，熟悉工程化、组件化、模块化、移动端开发，有使用nodejs，react开发的经验',
            '在空闲时间主动学习，阅读大部分业务源码并参与模块组件的开发，能从github上的各种开源项目中学习',
            '曾独立完成世界杯大活动、豌豆荚运营后台组件与业务',
            '希望能加入一个精英团队，就像2012年的豌豆荚',
          ]
        })
      ]
    }),
  }
];