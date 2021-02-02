Page({
  data: {
    list: ['啦啦啦', '嚯嚯嚯'],
    lists: ['啦啦啦', '嚯嚯嚯'],
    page: 1
  },

  onLoad: function (options) {

  },

  onReady: function (e) {
    this.setData({
      op: 1,
      mr: 0
    })
  },

  next: function (e) {
    this.data.page++;
    //模拟从后台获取到了下一页的数据，附加到原有数组上
    var lists = this.data.lists.concat(this.data.list)
    this.setData({
      lists: lists,
      page: this.data.page,
      op: 0,
      mr: -50
    })
    this.onReady();
  },
})