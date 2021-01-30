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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    initdone(e) {
      console.log(e)
      setTimeout(()=>{
        this.start()
      },300)
    },
    // 开始动画
    start() {
      const that = this
      this.animate('#animationLine', [
        { translateY: 0 },
        { translateY: 240 },
        { translateY: 0 },
      ], 6000, function () {
        that.clearAnimation('#scanCamera', { translateY: true }, function () {
          that.start()
        })
      }.bind(this))
    },
    scancode(e) {

      console.log(e)
    },
    cameraError() {

    }
  }
})
