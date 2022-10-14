const app = getApp();
var api = require('../../../utils/api.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choice: 0,
    },

    showModal(e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        })
    },
    hideModal() {
        this.setData({
            modalName: null
        })
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
        // getApp().globalData.lesson = this.data.lessonlist[this.data.choice];
        this.getfatherid();


    },
    getlessonids() {
        var that = this;
        var fatherid = this.data.fatherid;
        console.log("fatherid", fatherid)
        api.get({
            url: 'portal/categories/subCategories',
            data: {
                category_id: fatherid,
                order: '+list_order',
                field: "id,name"
            },
            success: (res) => {
                var data = res.data.categories;
                if (data.length) {
                    that.setData({
                        lessonlist: data
                    })
                }
            },
            complete: (res) => {
                console.log("com", res);
                that.getsections()
            }

        })
    },
    getsections() {
        var that = this;
        var choice = this.data.choice;
        var choiceid = this.data.lessonlist[choice].id;
        api.get({
            url: 'portal/lists/getCategoryPostLists',
            data: {
                category_id: choiceid,
                order: '+list_order',
                field: "more,post_excerpt,post_title,post_keywords"
            },
            success: (res) => {
                var sections = res.data.list;
                console.log("sections", sections)
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
    getfatherid() {
        var that = this;
        api.get({
            url: 'portal/categories',
            data: {
                // field: "list_order,name,seo_title,id", //限制字段段来加速
                // category_id: 21,
                // limit:100
                // list_order: "=10000", //默认顺序即可
                field: "id,name",
                limit: 100
            },
            success: data => {
                var data = data.data.list;
                // console.log(data)
                for (var i = 0; i < data.length; i++) {
                    // console.log(data[i].name)
                    if (data[i].name == "视频播放") {
                        that.setData({
                            fatherid: data[i].id
                        })
                        console.log(that.data.fatherid)
                        break;
                    }
                }
            },
            complete: () => {
                that.getlessonids();
            }
        });
    },
    jmp_watch(e) {
        var index = e.currentTarget.dataset.index
        getApp().globalData.lessonname = this.data.lessonlist[this.data.choice].name;
        getApp().globalData.sectionindex = index;
        getApp().globalData.sections = this.data.sections;
        wx.navigateTo({
            url: '../watch/watch',
        })


    },
    chooseLesson(e) {
        var index = e.currentTarget.dataset.index
        this.setData({
            choice: index
        })
        this.hideModal();
        this.getsections();
        // getApp().globalData.lesson = this.data.lessonlist[index];
    }
})