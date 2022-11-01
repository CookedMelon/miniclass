// app.js
import XMPlugin from './plugin'
App({
    globalData: {
    },
    onLaunch() {
        var that = this
        wx.cloud.init({
            traceUser: true,
            env: 'clay-cloud-5ganyv8c83cad12f'
        })
        var that = this;
        // 登录
        wx.login({
            success: res => {
                console.log(res);
                console.log(that.globalData.statusBarHeight);
            }
        })
        var user = wx.getStorageSync("user")
        if (user) {
            that.globalData.nickName = user.nickName
            that.globalData.avatarUrl = user.avatarUrl
        }
        // 获取状态栏的高度
        wx.getSystemInfo({
            success: function (res) {
                // px转换到rpx的比例
                let pxToRpxScale = 750 / res.windowWidth;
                // 状态栏的高度
                let ktxStatusHeight = res.statusBarHeight;
                // 导航栏的高度
                let navigationHeight = 44;
                // window的宽度
                let ktxWindowWidth = res.windowWidth;
                // window的高度
                let ktxWindowHeight = res.windowHeight;
                // 屏幕的高度
                let ktxScreentHeight = res.screenHeight;
                that.globalData.pxToRpxScale = pxToRpxScale;
                that.globalData.ktxStatusHeight = ktxStatusHeight;
                that.globalData.navigationHeight = navigationHeight;
                that.globalData.ktxWindowWidth = ktxWindowWidth;
                that.globalData.ktxWindowHeight = ktxWindowHeight;
                that.globalData.ktxScreentHeight = ktxScreentHeight;
            }
        })

        
        // atob() 
        XMPlugin.init({
          // 官方提供的 appKey 仅供测试，有调用次数限制，上线需替换为自己的 app_key。
          appKey: '99b37417e1185eda1378600593b45c40',
          appSecret: 'dd7a46b12fe8a304ef17892c89ede22a',
          debug: true,
        })
    }
})
