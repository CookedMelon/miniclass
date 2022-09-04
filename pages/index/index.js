const app = getApp();

Page({
    data: {
        PicHeight: -114154,
        activities: [
            {
                "name": "课外阅读",
                "acts": [
                    {
                        "name": "毓秀工大",
                        "color": "bg-gradual-red"
                    },
                    {
                        "name": "科学史话",
                        "color": "bg-gradual-red"
                    },
                    {
                        "name": "人物春秋",
                        "color": "bg-gradual-red"
                    },
                    {
                        "name": "悦学经典",
                        "color": "bg-gradual-red"
                    },
                    {
                        "name": "悦读书籍",
                        "color": "bg-gradual-red"
                    },
                    {
                        "name": "学习答题",
                        "color": "bg-gradual-red"
                    },
                ]
            },
            {
                "name": "课外阅读",
                "acts": [

                ]
            },
            {
                "name": "学科竞赛",
                "acts": [

                ]
            }

        ],
        choose: 1,
        gap: 150
    },

    onLoad() {
        this.setData({
            centerHeight: 200
        })

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
        var greenback = allHeight / 3;
        this.setData({
            greenback: greenback
        })
        const that = this;
        this.setData({
            getPicHeight: setInterval(function () {
                let query = wx.createSelectorQuery()
                query.select('#pic1').boundingClientRect((rect) => {
                    if (rect) {
                        let height = rect.height * app.globalData.pxToRpxScale
                        that.setData({
                            PicHeight: height
                        })
                    }
                }).exec()
                if (that.data.PicHeight > 0) clearInterval(that.data.getPicHeight)
            }, 100)
        })

    },
    clickactivity(e) {
        var index = e.currentTarget.dataset.index;
        this.setData({
            choose: index
        })
    },
    onShow() {

    },

})
