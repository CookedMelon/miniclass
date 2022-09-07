var api = require('../../utils/api.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log("hello world");
        this.api3();
    },
    api1() {
        api.get({
            url: 'portal/categories',
            data: {
                order: '+list_order', //默认顺序即可
                limit: 8,
                field: "list_order,name,seo_title,id" //限制字段来加速
            },
            success: data => {
                console.log("文章分类获取成功");
                console.log(data)
                this.setData({
                    list: data.data.list
                });
            },
            complete: () => {
                console.log("完成")

            }
        });
    },

    api2() {
        api.get({
            url: 'portal/categories/subCategories',
            data: {
                field: "list_order,name,seo_title,id", //限制字段段来加速
                // category_id: 0,
                // limit:100
            },
            success: data => {
                console.log(data)
            },
            complete: () => {

            }
        });
    },
    api3() {
        api.get({//请求后端返回数据
            url: 'portal/articles/92',
            data: {},
            success: data => {
                console.log(data)
                // wx.hideNavigationBarLoading();
                // if (data.code) {

                //     //初始化文章内容
                //     this.setData({
                //         article: data.data
                //     });
                //     WxParse.wxParse('articleContent', 'html', data.data.post_content, this, 30);
                //     wx.setNavigationBarTitle({
                //         title: data.data.post_title
                //     });
                //     wx.hideLoading({
                //         complete: (res) => { },
                //     })
                //     //初始化音频内容
                //     dbAudio.where({//尝试从云数据库获取音频地址
                //         articleId: articleId
                //     }).get().then(res => {
                //         if (res.data.length == 0) {//如果未发现此文章的音频，则生成音频：1.将文章去除html标签；2.根据逗号、句号、分号为划分点，将文章划分为数组；3.合并数组，array[i]=第一句话+第二句话+……+第n句话&&array[i].length<320,同声传译限制1000字节即utf-8的333个汉字；4.遍历array，每个元素调用一次getVoice（）获取音频；5.遍历结束，调用getVoice（end）；6.初始化播放器

                //             wx.showLoading({
                //                 title: '正在生成',
                //                 mask: 'true'
                //             })

                //             var txt = data.data.post_content//第1步
                //             var Lable = /<\/?.+?\/?>/g
                //             txt = txt.replace(Lable, '')

                //             var cutSign = /，|。|；/g//第2步
                //             var voidStr = /[\s]+/g
                //             txt = txt.replace(cutSign, "，+")
                //             txt = txt.replace(voidStr, '。+')
                //             txt = txt.split('+')

                //             var len = 0//第3步
                //             var k = 0
                //             var str = ''
                //             for (var i in txt) {
                //                 len = len + txt[i].length
                //                 if (len < 320) {
                //                     str = str + txt[i]
                //                 } else {
                //                     that.getVoice(str, k, data.data.post_title)//套在第3步中的第4步
                //                     str = txt[i]
                //                     len = txt[i].length
                //                     k++
                //                 }
                //             }
                //             that.getVoice(str, k, data.data.post_title)//第4步，生成array最后一项元素的音频
                //             that.getVoice("此篇文章已结束", k + 1, data.data.post_title, "end")//第5步；//可去除，end放在上一行

                //         }
                //         else {//若在数据库中找到了这篇文章的音频，则应用，初始化播放器
                //             audio = res.data[0].sum_audio
                //             that.setData({
                //                 audio: audio
                //             })

                //             that.initBackGroundAudio(res.data[0].sum_timeNode)
                //             if (!res.data[0].sum_timeNode) myAudio.getDuration(res.data[0].sum_audio, that, articleId)
                //         }
                //     })//数据库操作结束

                // }
            },
            fail: err => {//后端不给数据
                wx.hideNavigationBarLoading();
            }
        });
    }
})