const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        choice: 0,
        lessonlist:
            [
                {
                    "name": "C程序设计",
                    "sections": [
                        {
                            "name": "C语言基础",
                            "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp",
                            "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "字符", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "输入输出流", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "数据结构", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "循环结构", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "函数", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "指针", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        },
                        {
                            "name": "数组", "pic": "https://i1.hdslb.com/bfs/archive/2ac43b72c2da07b03704ebf3b9a80d5e6bb34864.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "指针，是C语言中的一个重要概念及其特点，也是掌握C语言比较困难的部分。指针也就是内存地址，指针变量是用来存放内存地址的变量，在同一CPU构架下，不同类型的指针变量所占用的存储单元长度是相同的，而存放数据的变量因数据的类型不同，所占用的存储空间长度也不同。有了指针以后，不仅可以对数据本身，也可以对存储数据的变量地址进行操作。 "
                        }
                    ]
                },
                {
                    "name": "计算机系统基础",
                    "sections": [
                        {
                            "name": "C程序举例", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "冯诺依曼结构", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "计算机系统层次", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "二进制", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "补码", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "浮点数编码表示", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "IA-32指令集", "pic": "https://i0.hdslb.com/bfs/archive/9940b0b7b1c80e6a142c50416d031cd3e5e88677.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        }
                    ]
                },
                {
                    "name": "Windows程序设计",
                    "sections": [
                        {
                            "name": "课程介绍", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "线程", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "图形界面", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "GUI编程", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "Windows文件编码格式", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        },
                        {
                            "name": "Windows服务开发框架", "pic": "https://i2.hdslb.com/bfs/archive/ba1bd7e60ce43c25e5538ce3cc2fff5e9632a30c.jpg@672w_378h_1c.webp", "video": "https://kvideo01.youju.sohu.com/d3dcfbe9-3d52-4ae3-8b51-0988c28881222_0_0.mp4",
                            "description": "这是简介"
                        }
                    ]
                }
            ],

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
        getApp().globalData.lesson = this.data.lessonlist[this.data.choice];
    },
    jmp_watch(e) {
        var index = e.currentTarget.dataset.index
        wx.navigateTo({
            url: '../watch/watch',
        })
        getApp().globalData.lessonindex = index;

    },
    chooseLesson(e) {
        var index = e.currentTarget.dataset.index
        this.setData({
            choice: index
        })
        this.hideModal();
        getApp().globalData.lesson = this.data.lessonlist[index];
    }
})