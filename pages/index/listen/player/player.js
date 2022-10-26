import XMPlugin from '../../../../plugin'

/**
 * 获取喜马拉雅播放器
 */
const getPlayer = () => {
  const instance = XMPlugin.getInstance()
  // 这里只是为了类型提示正确，实际上app.js只要初始化，不会有 instance 不存在的情况
  if (!instance) throw new Error('插件尚未初始化')
  return instance.player
}

Page({
  data: {
    sound: {
      title: '喜马拉雅',
      coverImgUrl: 'https://fdfs.xmcdn.com/storages/37e0-audiofreehighqps/24/5E/CMCoOR4Do2fmAAB0MgButNJD.png',
    },
    isPlaying: false, // 正在播放
    percent: 0, // 播放进度
    isDragging: false, // 是否正在拖动
    playList: [459588057, 214981354, 222875778, 222876070], //当前播放列表382780276
    index: 0, //当前播放下标
  },
  player: null, // 播放器实例
  eventListeners: {}, // 事件监听器
  onLoad(e) {
    playList: [211360709, 211360984] //腿姐政治
    // 初始化设置播放器
    // console.log(e.index)
    let index = Number(e.index)
    this.setData({
      index: index
    })
    this.player = getPlayer()
    this.player.setPlaylist(this.data.playList)
    // this.player.play(this.data.playList[this.data.index])
    // console.log('初始化',this.player.getSounds(this.data.playList))
    var books = wx.getStorageSync('Books')
    console.log('book', books.percent, books.index)
    //判断上次退出前和当前点击的是否是同一本书，如果不是就播放当前点击，一切置零，否则继续播放上次进度。
    if (books.index != this.data.index) {
      this.player.play(this.data.playList[this.data.index])
      var books = {}
      books.index = this.data.index
      books.percent = this.data.percent
      wx.setStorageSync('Books', books)
      console.log('0')
    } else {
      if (books.percent == 0) {
        this.player.play(this.data.playList[this.data.index])
        console.log('1')
      } else {
        this.setData({
          percent: books.percent
        })
        // this.player.play()
      }
    }


    // 同步界面初始状态
    if (this.player.getSound()) {
      
      this.setData({
        sound: this.player.getSound(),
        isPlaying: this.player.getPlayState() === 'playing',
        percent: this.data.percent,
      })
    }

    // 监听事件
    this.eventListeners = {
      'change.playState': (sound, playState) => {
        const isPlaying = playState === 'playing' || playState === 'loading'
        this.setData({
          isPlaying: isPlaying,
        })
      },
      'change.sound': (sound) => {
        this.setData({
          sound: sound,
        })
      },
      timeupdate: (sound, currentTime) => {
        const duration = this.player.getDuration()
        const percent = (currentTime / duration) * 100
        // 正在拖拽 或 无法计算进度
        if (this.data.isDragging || !duration) {
          return
        }
        var books = {}
        books.percent = percent
        books.index = this.data.index
        console.log('percent', percent)
        wx.setStorageSync('Books', books)
        this.setData({
          percent,
        })
      }
    }

    Object.keys(this.eventListeners).forEach((eventName) => {
      this.player.on(eventName, this.eventListeners[eventName])
    })
  },
  onUnload() {
    // 组件卸载时取消事件绑定，这步非常重要
    Object.keys(this.eventListeners).forEach((eventName) => {
      this.player.off(eventName, this.eventListeners[eventName])
    })
  },
  play() {
    // 根据当前播放状态切换
    if (this.data.isPlaying) {
      this.player.pause()
      console.log('zanting', this.data.percent)
      var books = {}
      books.percent = this.data.percent
      books.index = this.data.index
      wx.setStorageSync('Books', books)
    } else {
      this.player.play()
      var books = {}
      books.percent = this.data.percent
      books.index = this.data.index
      wx.setStorageSync('Books', books)
    }
  },
  next() {
    var books = {}
    books.percent = 0
    if((this.data.index + 1) == this.data.playList.length)
    {
      //判断当前是否是最后一首
      books.index = 0
      this.setData({
        index: 0
      })
    }
    else
    {
      books.index = this.data.index + 1
      this.setData({
        index: this.data.index + 1
      })
    }
    console.log('下一首', books.index)
    wx.setStorageSync('Books', books)
    this.player.next()

  },
  prev() {
    var books = {}
    books.percent = 0
    if((this.data.index - 1) < 0)
    {
      //判断当前是否是第一首
      books.index = this.data.playList.length - 1
      this.setData({
        index: this.data.playList.length - 1
      })
    }
    else
    {
      books.index = this.data.index - 1
      this.setData({
        index: this.data.index - 1
      })
    }
    console.log('上一首', books.index)
    wx.setStorageSync('Books', books)
    this.player.prev()

  },
  changeProgress(event) {
    const {
      value
    } = event.detail
    const playTime = this.player.getDuration() * (value / 100)

    var books = {}
    books.percent = value
    books.index = this.data.index
    wx.setStorageSync('Books', books)
    this.setData({
      percent: value,
      isDragging: false,
    })

    this.player.seek(playTime)
  },
  changingProgress() {
    this.setData({
      isDragging: true,
    })
  },
})