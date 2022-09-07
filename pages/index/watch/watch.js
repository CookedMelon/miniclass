const app = getApp();
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
        var lesson = app.globalData.lesson;
        console.log(lesson)
        var lessonindex = app.globalData.lessonindex;
        var section = lesson.sections[lessonindex];
        this.setData({
            lesson: lesson,
            lessonindex: lessonindex,
            section: section
        })
    },

})