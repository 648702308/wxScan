// components/scanCode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    scanFunctionIsUseable: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initdone(e) {
      console.log('camera 初始化完成')
      this.clearAnimation('#animationLine')
      setTimeout(() => {
        this.start()
      }, 300)
    },
    // 开始动画
    start() {
      const that = this
      this.animate('#animationLine', [
        { translateY: 0 },
        { translateY: 240 },
        { translateY: 0 },
      ], 6000, function () {
        that.clearAnimation('#animationLine', { translateY: true }, function () {
          that.start()
        })
      }.bind(this))
    },
    // 在扫码识别成功时触发
    scancode(e) {
      const that = this
      if (this.data.scanFunctionIsUseable) {
        this.setData({ scanFunctionIsUseable: false })
        wx.showLoading({
          mask: true,
          title: '查询中…'
        })
        wx.vibrateLong()
        this.triggerEvent('scancode', {
          data: e,
          fun: function () {
            wx.hideLoading()
            that.setData({ scanFunctionIsUseable: true })
          }
        })
      }
    },
    // 用户不允许使用摄像头时触发
    cameraError() {

    }
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 在组件实例进入页面节点树时执行
    this.clearAnimation('#animationLine')
  },
  detached: function () {
    // 在组件实例被从页面节点树移除时执行
    this.clearAnimation('#animationLine')
  }
})
