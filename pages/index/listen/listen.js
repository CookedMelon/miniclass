const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist: [{
        "name": "第0课 对编程初学者的话",
        "author": "喜马拉雅 WangTeacher",
        "img": "https://imagev2.xmcdn.com/storages/2736-audiofreehighqps/88/06/CKwRINsFL7ZWAAGcvgDpJJCW.jpeg!op_type=3&columns=100&rows=100",
      },
      {
        "name": "第1课 C语言简介",
        "author": "喜马拉雅 WangTeacher",
        "img": "https://imagev2.xmcdn.com/group64/M09/BD/AE/wKgMc119rA-jjixyAA2wOyNyPF0403.png!op_type=3&columns=100&rows=100",
      },
      {
        "name": "第2课 Windows开发环境搭建",
        "author": "喜马拉雅 WangTeacher",
        "img": "https://imagev2.xmcdn.com/group64/M09/BD/AE/wKgMc119rA-jjixyAA2wOyNyPF0403.png!op_type=3&columns=100&rows=100",
      },
      {
        "name": "第3课 Hello World",
        "author": "喜马拉雅 WangTeacher",
        "img": "https://imagev2.xmcdn.com/group64/M09/BD/AE/wKgMc119rA-jjixyAA2wOyNyPF0403.png!op_type=3&columns=100&rows=100",
      },
      // {
      //   "name": "第4课 程序的基本组成",
      //   "author": "喜马拉雅 WangTeacher",
      //   "img": "https://imagev2.xmcdn.com/storages/2736-audiofreehighqps/88/06/CKwRINsFL7ZWAAGcvgDpJJCW.jpeg!op_type=3&columns=100&rows=100",
      // },
    ]


  },
  onLoad() {
    var pxToRpxScale = app.globalData.pxToRpxScale
    var StatusHeight = app.globalData.ktxStatusHeight * pxToRpxScale;
    var navigationHeight = app.globalData.navigationHeight * pxToRpxScale;
    var HeadBar = (app.globalData.ktxStatusHeight + app.globalData.navigationHeight) * pxToRpxScale
    var ShowHeight = (app.globalData.ktxWindowHeight - app.globalData.ktxStatusHeight) * pxToRpxScale;
    var allHeight = HeadBar + ShowHeight;
    var bottom = 44 * pxToRpxScale
    this.setData({
      StatusHeight: StatusHeight,
      navigationHeight: navigationHeight,
      HeadBar: HeadBar,
      ShowHeight: ShowHeight,
      bottom: bottom,
      allHeight: allHeight
    })
  },
  jmp_book(e) {
    var index = e.currentTarget.dataset.index;
    index = JSON.stringify(index)
    wx.navigateTo({
      url: './player/player?index=' + index,
    })
    // getApp().globalData.book = this.data.booklist[index];
  }
})