const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        booklist: [
            {
                "name": "课本1",
                "author": "作者1",
                "img": "https://img3.doubanio.com/view/subject/l/public/s29783780.jpg",
                "chapters": [
                    { "name": "第一章", "index": 0 },
                    { "name": "第二章", "index": 1 },
                    { "name": "第三章", "index": 2 },
                    { "name": "第四章", "index": 3 }
                ]
            },
            {
                "name": "课本2",
                "author": "作者2",
                "img": "https://img3.doubanio.com/view/subject/l/public/s29783780.jpg",
                "chapters": [
                    { "name": "第一章", "index": 0 },
                    { "name": "第二章", "index": 1 },
                    { "name": "第三章", "index": 2 },
                    { "name": "第四章", "index": 3 }
                ]
            },
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
        wx.navigateTo({
            url: './book/book',
        })
        getApp().globalData.book = this.data.booklist[index];
    }
})