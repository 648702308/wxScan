Page({
  data: {
    lists: [],
    scrollInfoId: '',
    top: -70
  },
  onLoad: function () {

  },
  onShow() {
    
  },
  onReady() {

  },
  scancode(e) {
    const that = this
    // 校验扫描结果，并处理
    console.log(e.detail.data)
    const testId = +new Date()
    that.data.lists.unshift({
      value: e.detail.data.detail.result,
      id: testId
    })
    console.log(that.data.lists)
    setTimeout(() => {
      that.setData({
        lists: that.data.lists
      }, () => {
        that.setData({
          scrollInfoId: `id-${testId}`
        })
      })
      e.detail.fun()
    }, 2000)
  },
  onHide() {

  },
  onUnload() {

  }
})