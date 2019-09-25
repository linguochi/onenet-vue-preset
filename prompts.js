// 此 preset 在被初始化调用的时候，执行这个prompts
// 被解析的答案对象会作为选项被传递给 generator。

module.exports = [
  {
    name: "ui-framework",
    type: "list",
    message: "choose UI Framework",
    choices: [
      {
        name: "none",
        value: "none"
      },
      {
        name: "Element UI",
        value: "element-ui"
      },
      {
        name: "iView",
        value: "iview"
      }
    ],
    default: "none"
  },
  {
    name: "multiPage",
    type: "confirm",
    message: "使用多页？",
    default: false
  }
];
