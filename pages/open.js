const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kaiping:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
        allHeight: allHeight,
        kaiping:true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("in")
    var that=this;
    if (that.data.kaiping) {
      setTimeout(function() {
           that.setData({
           kaiping: false
        })
        that.nativetoindex()
      }, 9000);
    }
    
    
  },
  nativetoindex(){
    wx.switchTab({
      url:'../index/index'
      });  
  }

})