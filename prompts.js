// 此 preset 在被初始化调用的时候，执行这个prompts
// 被解析的答案对象会作为选项被传递给 generator。

module.exports = [
  {
    name: 'application',
    type: 'list',
    message: 'Choose whether your app is a PC or a mobile(default:mobile)',
    choices: [
      {
        name: 'PC',
        value: 'pc'
      },
      {
        name: 'mobile',
        value: 'mobile'
      }
    ],
    default: 'mobile'
  },
  {
    name: 'ui-framework',
    type: 'list',
    message: 'choose UI Framework',
    choices: [
      {
        name: 'none',
        value: 'none'
      },
      {
        name: 'Element UI',
        value: 'element-ui'
      },
      {
        name: 'iView',
        value: 'iview'
      },
      {
        name: 'Ant Design Vue',
        value: 'antDesign'
      },
      {
        name: 'vant(H5)',
        value: 'vant'
      }
    ],
    default: 'none'
  },
  {
    name: 'multiPage',
    type: 'confirm',
    message: '使用多页？',
    default: false
  }
];
