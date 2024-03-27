export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/list/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      'iconPath': '',
      "selectedIconPath": '',
      pagePath: 'pages/index/index',
      text:"首页"
    }, {
      'iconPath': '',
      "selectedIconPath": '',
      pagePath: 'pages/list/index',
      text:"我"
    }]
  }
})
