const app = getApp();

Page({
    data: {
        PicHeight: -114154,
        activities: [
            {
                "name": "工大记忆",
                "acts": [
                    {
                        "name": "毓秀工大",
                        "color": "bg-gradual-red",
                        "bindtap": "jmp_NPU",
                        "id": "17"
                    },
                    {
                        "name": "科学史话",
                        "color": "bg-gradual-blue",
                        "bindtap": "jmp_NPU",
                        "id": "19"
                    },
                    {
                        "name": "人物春秋",
                        "color": "bg-gradual-pink",
                        "bindtap": "jmp_NPU",
                        "id": "18"
                    },
                    {
                        "name": "悦学经典",
                        "color": "bg-gradual-green",
                        "bindtap": "jmp_NPU",
                        "id": "23"
                    },
                    {
                        "name": "悦读书籍",
                        "color": "bg-gradual-orange",
                        "bindtap": "jmp_NPU",
                        "id": "24"
                    }

                ]
            },
            {
                "name": "课外阅读",
                "acts": [
                    {
                        "name": "科学史话",
                        "color": "bg-gradual-green"
                    },
                    {
                        "name": "人物春秋",
                        "color": "bg-gradual-purple"
                    },
                    {
                        "name": "悦学经典",
                        "color": "bg-gradual-blue"
                    },
                    {
                        "name": "悦读书籍",
                        "color": "bg-gradual-pink"
                    }
                ]
            },
            {
                "name": "实践活动",
                "acts": [

                ]
            },
            {
                "name": "学科竞赛",
                "acts": [
                    {
                        "name": "学习答题",
                        "color": "bg-gradual-orange"
                    }
                ]
            }

        ],
        choose: 0,
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
    onShow() {
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
    jmp_promotional() {
        wx.navigateTo({
            url: './promotional/promotional'
        })
    },
    jmp_lesson() {
        wx.navigateTo({
            url: './lesson/lesson',
        })
    },
    jmp_live() {
        wx.navigateTo({
            url: './live/live',
        })
    },
    jmp_NPU(e) {
        console.log(e)
        var classify = e.currentTarget.dataset.classify;
        var url = '../article/menu/menu?id=' + classify.id + "&name=" + classify.name;
        wx.navigateTo({
            url: url,
        })
    },
    jmp_exercise() {
        wx.navigateTo({
            url: './exercise/exercise',
        })
    }

})

