const app = getApp();
const db = wx.cloud.database()
Page({
    data: {
        iflogin: false,
        avatarUrl: 'https://wx2.sinaimg.cn/mw2000/0085wEMdly1h2q4mp6kluj305k05k3yi.jpg',
        nickName: '点击登录',
    },
    onLoad() {
        if (app.globalData.nickName && app.globalData.avatarUrl) {
            this.setData({
                iflogin: true,
                avatarUrl: app.globalData.avatarUrl,
                nickName: app.globalData.nickName
            })
        }
        console.log(app.globalData)
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
    async login() {

    },
    getUserProfile(e) {
        var that = this;
        //使用云函数获取用户openid
        wx.cloud.callFunction({
            name: 'getInformation',
        }).then(res => {
            console.log("res", res)
            that.setData({
                openid: res.result.openid,
                iflogin: true
            })
            //获取云数据库的用户信息
            console.log(that.data.openid)
        })
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                that.setData({
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName,
                    hasUserInfo: true
                })
                wx.setStorageSync('user', { "nickName": that.data.nickName, "avatarUrl": that.data.avatarUrl });
            }
        })

    },
    jmp_lesson() {
        wx.navigateTo({
            url: '../index/lesson/lesson',
        })
    },
})