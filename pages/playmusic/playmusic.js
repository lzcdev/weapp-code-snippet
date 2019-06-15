// pages/playmusic/playmusic.js

const innerAudioContext = wx.createInnerAudioContext()
const url = `http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46`

Page({

  /**
   * 页面的初始数据
   */
  data: {
    duration: 0,
    total: 0,
    currentTime: 0,
    value: 0,
    current: 0
  },
  changeValue: function(e) {
    console.log(e.detail.value)
    innerAudioContext.seek(e.detail.value)
    this.updateSlide()

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    innerAudioContext.autoplay = true
    innerAudioContext.volume = 0.1
    innerAudioContext.src = url
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
      this.updateSlide()
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })

  },

  updateSlide: function() {

    innerAudioContext.onTimeUpdate(() => {
      // console.log(Math.floor(innerAudioContext.currentTime))
      const total = this.seconds_to_minute(innerAudioContext.duration)
      const current = this.seconds_to_minute(innerAudioContext.currentTime)
      this.setData({
        duration: total,
        currentTime: current,
        value: Math.floor(innerAudioContext.currentTime),
        total: Math.floor(innerAudioContext.duration)
      })
    })
  },

  seconds_to_minute: function(sec) {
    var m = Math.floor(sec / 60 % 60)
    var s = Math.floor(sec % 60)
    if (m < 10) {
      m = '0' + String(m)
    }
    if (s < 10) {
      s = '0' + String(s)
    }
    return `${m}:${s}`
    // return `${m}` < 10 ? `0${m}:${s}` : `${m}:${s}`
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})