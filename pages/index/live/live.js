const app = getApp()
Page({
    data: {
      orderInfo: [
        {
          "tittle":"腾讯会议测试",
          "meetingNumber":'852205426',
          "host":"李旭"
        },
        {
          "tittle":"程序设计答疑",
          "meetingNumber":'313822593',
          "host":"李旭"
        }
      ],
    },

    onLoad(options) {
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
    //会议跳转
    toMeeting: function(e){
      var index = e.currentTarget.dataset.index
      var number = this.data.orderInfo[index].meetingNumber
      console.log('会议号', number)
      var string = 'pages/sub-preMeeting/join-meeting/join-meeting?scene=m%3D' + String(number)
      console.log(string)
      wx.navigateToMiniProgram({
        appId: 'wx33fd6cdc62520063', // 要跳转的微信小程序appid
        path: string, // 要跳转到的页面路径
        success:res => {
          console.log(res)
        },
        fail(res) {
          console.log(res)
        }
      })
    },
})