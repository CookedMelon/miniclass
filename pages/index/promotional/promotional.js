const app = getApp();
var util = require('../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: "指针"
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
            allHeight: allHeight
        })
        var sectionindex = app.globalData.sectionindex;
        var sections = app.globalData.sections;
        var lessonname = app.globalData.lessonname;
        // var section = sections[sectionindex];
        this.setData({
            lessonname: lessonname,
            sections: sections,
            sectionindex: sectionindex
        })
    },
    onShow(){
      var time = util.formatTime(new Date());
      var time_data = time.split(" ")[0];
      console.log(time_data);
      if(time_data=="2022/11/02"){
          this.setData({
            dontshow:true
          })
      }
    }
})