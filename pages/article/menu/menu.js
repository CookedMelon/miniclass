const app = getApp();
var api = require('../../../utils/api.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choice: 0,
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
        this.setData({
            fatherid: options.id,
            name: options.name
        })
        // getApp().globalData.lesson = this.data.lessonlist[this.data.choice];
        this.getids();

    },
    jmp_art(e) {
        console.log(e.currentTarget.dataset.index)
        wx.navigateTo({
            url: '../NPU/NPU?id=' + e.currentTarget.dataset.index
        })
    },
    getids() {
        var that = this;
        // var choice = this.data.choice;
        var choiceid = this.data.fatherid;
        api.get({
            url: 'portal/lists/getCategoryPostLists',
            data: {
                category_id: choiceid,
                order: '+list_order',
                field: "post_title,post.id",
            },
            success: (res) => {
                var sections = res.data.list;
                console.log("sections", sections)
                for (var i = 0; i < sections.length; i++) {
                    sections[i].post_index = sections[i].post_title.substring(sections[i].post_title.length - 6);
                    console.log(sections[i].post_index)
                    sections[i].post_title = sections[i].post_title.substring(0, sections[i].post_title.length - 6);
                }
                that.setData({
                    sections: sections
                })
            },
            complete: (res) => {
                console.log("comsec");
                // that.getsections()
            }

        })
    },
    // getlessons() {
    //     api.get({
    //         url: 'portal/lists/getCategoryPostLists',
    //         data: {
    //             // field: "list_order,name,seo_title,id", //限制字段段来加速
    //             category_id: 21,
    //             // limit:100
    //             // list_order: "=10000", //默认顺序即可
    //         },
    //         success: data => {
    //             console.log(data)
    //         },
    //         complete: () => {

    //         }
    //     });
    // },
    // getids() {
    //     var that = this;
    //     api.get({
    //         url: 'portal/categories',
    //         data: {
    //             // field: "list_order,name,seo_title,id", //限制字段段来加速
    //             // category_id: 21,
    //             // limit:100
    //             // list_order: "=10000", //默认顺序即可
    //             field: "id,name",
    //             limit: 100
    //         },
    //         success: data => {
    //             var data = data.data.list;
    //             // console.log(data)
    //             for (var i = 0; i < data.length; i++) {
    //                 // console.log(data[i].name)
    //                 if (data[i].name == "视频播放") {
    //                     that.setData({
    //                         fatherid: data[i].id
    //                     })
    //                     console.log(that.data.fatherid)
    //                     break;
    //                 }
    //             }
    //         },
    //         complete: () => {
    //             that.getlessonids();
    //         }
    //     });
    // }
})