// scan.js
// 移动动画
Page({
  data: {

  },
  onLoad: function () {

  },
  onShow() {
  },
  donghua() {

  },
  scancode(e) {
    // 校验扫描结果，并处理
    console.log(e.detail.data)
    setTimeout(() => {
      e.detail.fun()
    }, 2000)
  },
  onHide() {

  },
  onUnload() {

  }
})