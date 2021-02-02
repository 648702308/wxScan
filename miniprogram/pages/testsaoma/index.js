Page({
  data: {
    
    lists: [{ value: '1222222222225444', id: 1, top: 0 },],
    scrollInfoId: '',
    current: 0
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
    that.data.lists.push({
      value: e.detail.data.detail.result,
      id: testId
    })
    setTimeout(() => {
      that.setData({
        lists: that.data.lists
      }, () => {
        this.clicks()
      })
      e.detail.fun()
    }, 2000)
  },
  click() {
    const that = this
    const testId = +new Date()
    that.data.lists.push({
      value: 'time:' + testId,
      id: testId
    })
    that.setData({
      lists: that.data.lists
    }, () => {
      this.clicks()
    })
  },
  clicks() {
    let current = this.data.current
    if (current < this.data.lists.length - 1) {
      current = this.data.lists.length - 1
    } else {
      current = 0
    }
    this.setData({
      current: current
    })
  },
  //禁用swiper滑动功能
  stopTouchMove() {
    return false;
  },
  onHide() {

  },
  onUnload() {

  }
})