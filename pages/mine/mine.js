const app = getApp();
const db = wx.cloud.database()

var util = require('../../utils/util.js');
Page({
    data: {
        

        iflogin: false,
        avatarUrl: 'https://wx2.sinaimg.cn/mw2000/0085wEMdly1h2q4mp6kluj305k05k3yi.jpg',
        nickName: '点击登录',
        if_clock_in:false,
        // dateString: "2022/10/26",
        // spot: ['2022/5/6', '2022/5/9', '2022/5/20', '2022/5/12', '2022/6/1']
    },
    onLoad() {
        var time = util.formatTime(new Date());
        var time_data = time.split(" ")[0];
        console.log(time_data);
        this.setData({
            nowdate:time_data,
        })
        var last_login_time=wx.getStorageSync('last_clock_in_data')
        console.log(last_login_time)
        if(last_login_time==time_data){
            this.setData({
                if_clock_in:true,
            })
        }
        if (app.globalData.nickName && app.globalData.avatarUrl) {
            this.setData({
                iflogin: true,
                avatarUrl: app.globalData.avatarUrl,
                nickName: app.globalData.nickName
            })
            var spot=this.getPastDays();
            console.log(spot)
            if(this.data.if_clock_in){
                spot.push(this.data.nowdate)
            }
            this.setData({
                spot:spot
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
    dateChange(e) {
        this.setData({
          dateString: e.detail.dateString
        })
    },
    async login() {

    },
    getNextDate(date,day) {  
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        // console.log(y + "/" + m + "/" + d);
        return y + "/" + m + "/" + d;
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
      var time = util.formatTime(new Date());
      var time_data = time.split(" ")[0];
      console.log(time_data);
      if(time_data=='2022/11/01'){
        wx.showToast({
          title: '功能未开放',
          icon:'error'
        })
        return
      }else{
        if(this.data.iflogin){
            wx.navigateTo({
                        url: '../index/lesson/lesson',
                    })
        }else{
            wx.showToast({
                title: '请先登录',
                icon: 'error',
                duration: 2000
            })
        }
      }
    },
    jmp_exercise(){
        if(this.data.iflogin){
            wx.navigateTo({
                url: '../index/exercise/exercise',
            })
        }else{
            wx.showToast({
                title: '请先登录',
                icon: 'error',
                duration: 2000
            })
        }
    },
    getPastDays(){
        var spot=[];
        var time_data=this.data.nowdate;
        for(var i=1;i<5;i++){
            spot.push(this.getNextDate(time_data,-i));
        }
        spot.push(this.getNextDate(time_data,-7));
        spot.push(this.getNextDate(time_data,-10));
        console.log(spot);
        return spot;
    },
    clock_in(){
        if(this.data.iflogin){
            var spot=this.data.spot;
                if(this.data.if_clock_in){
                    wx.showToast({
                        title: '今日已打卡',
                        icon: 'success',
                        duration: 2000
                    })
                    return;
                }
            wx.showToast({
                title: '签到成功',
                icon: 'success',
                duration: 2000
            })
            wx.setStorageSync('last_clock_in_data',this.data.nowdate);
            var spot=this.getPastDays();
            spot.push(this.data.nowdate);
            this.setData({
                spot:spot,
                if_clock_in:true
            })
        }else{
            wx.showToast({
                title: '请先登录',
                icon: 'error',
                duration: 2000
            })
        }
    },
    phone(){

        wx.showModal({
                title: '客服热线',
                content: '13585001772',
                showCancel: false
        })
    },
    exit(){
        var that =this;
        if(this.data.iflogin){
        wx.showModal({
            title: '确认退出登录吗',
            // content: '这是一个模态弹窗',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
                
                that.setData({
                    iflogin: false,
                    avatarUrl: 'https://wx2.sinaimg.cn/mw2000/0085wEMdly1h2q4mp6kluj305k05k3yi.jpg',
                    nickName: '点击登录'
                })
               
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }else{
            wx.showToast({
                title: '已退出登录',
                icon: 'none',
                duration: 2000
            })
        }
    }
})