const app = getApp();
var api = require('../../../utils/api.js');
var WxParse = require('../../../wxParse/wxParse.js'); //富文本
Page({
    data: {

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
        api.get({//请求后端返回数据
            url: 'portal/articles/92',
            data: {},
            success: data => {
                console.log(data)
                wx.hideNavigationBarLoading();
                if (data.code) {

                    //初始化文章内容
                    this.setData({
                        article: data.data
                    });
                    WxParse.wxParse('articleContent', 'html', data.data.post_content, this, 30);
                    wx.setNavigationBarTitle({
                        title: data.data.post_title
                    });
                    wx.hideLoading({
                        complete: (res) => { },
                    })
                }
            },
            fail: err => {//后端不给数据
                console.log("请求失败")
            },
            complete: () => {//请求完成 
                console.log("请求完成")
            }
        });
    },
    onLikeTap(e) {
        api.post({
            url: 'portal/articles/doLike',
            data: {
                // id: this.params.id
                id: 92
            },
            success: data => {
                if (data.code) {
                    wx.showToast({
                        title: '点赞成功!',
                        icon: 'success',
                        duration: 1000
                    });
                    this.setData({
                        'article.post_like': data.data.post_like
                    });
                } else {
                    wx.showToast({
                        title: data.msg,
                        icon: 'error',
                        duration: 1000
                    });
                }
            },
            fail: err => { }
        });
    },
})