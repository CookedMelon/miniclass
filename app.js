// app.js
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
    }
})
