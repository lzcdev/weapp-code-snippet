// pages/fold/fold.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 0,
      name: '水果',
      open: false,
      page: ['苹果', '香蕉', '西瓜']
    }, {
      id: 1,
      name: '语言',
      open: false,
      page: ['JavaScript', 'Swift', 'Flutter']
    }, {
      id: 2,
      name: '框架',
      open: false,
      page: ['Vue', 'React']
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  toggle(e) {
    console.log(e.currentTarget.id)

    var id = e.currentTarget.id;
    var list = this.data.list;

    for (let i = 0, len = list.length; i < len; ++i) {
      console.log(list[i].id, id)
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    console.log(list[0].open);
    this.setData({
      list: list
    })
  }
})