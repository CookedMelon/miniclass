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
            url: 'portal/lists/getCategoryPostLists',
            data: {
                // field: "list_order,name,seo_title,id", //限制字段段来加速
                // category_id: 0,
                // limit:100
                // list_order: "=10000", //默认顺序即可
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
            url: 'portal/lists/getCategoryPostLists',
            data: {
                order: '+update_time',
                category_id: 21,
            },
            success: data => {
                console.log("文章分类获取成功");
                this.setData({
                    list: data.data.list
                });
                console.log(this.data.list)
            }

        })
        console.log(this.data.list)
    }
})