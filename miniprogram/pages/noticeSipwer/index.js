// miniprogram/pages/noticeSipwer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      { text: '君不见黄河之水天上来，奔流到海不复回。', id: 1 },
      { text: '君不见高堂明镜悲白发，朝如青丝暮成雪。', id: 2 },
      { text: '人生得意须尽欢，莫使金樽空对月。', id: 3 },
      { text: '天生我材必有用，千金散尽还复来。', id: 4 },
      { text: '烹羊宰牛且为乐，会须一饮三百杯。', id: 4 },
      { text: '岑夫子，丹丘生，将进酒，杯莫停。', id: 4 },
      { text: '与君歌一曲，请君为我倾耳听。', id: 4 },
      { text: '钟鼓馔玉不足贵，但愿长醉不愿醒。', id: 4 },
      { text: '古来圣贤皆寂寞，惟有饮者留其名。', id: 4 },
      { text: '陈王昔时宴平乐，斗酒十千恣欢谑。', id: 4 },
      { text: '主人何为言少钱，径须沽取对君酌。', id: 4 },
      { text: '五花马、千金裘，呼儿将出换美酒，与尔同销万古愁。', id: 4 },
    ],
    lists2: [
      { text: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。' },
      { text: '参差荇菜，左右流之。窈窕淑女，寤寐求之。' },
      { text: '求之不得，寤寐思服。悠哉悠哉，辗转反侧。' },
      { text: '参差荇菜，左右采之。窈窕淑女，琴瑟友之。' },
      { text: '参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。' },
    ],
    text: "",
    animation: null,
    timer: null,
    duration: 0,
    textWidth: 0,
    wrapWidth: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.nextTick(()=>{
      this.initAnimation(this.data.text)
    })
  },
  destroyTimer() {
    if (this.data.timer) {
      clearTimeout(this.data.timer);
    }
  },
  /**
   * 开启公告字幕滚动动画
   * @param  {String} text 公告内容
   * @return {[type]} 
   */
  initAnimation(text) {
    let that = this
    this.data.duration = 30000
    this.data.animation = wx.createAnimation({
      duration: this.data.duration,
      timingFunction: 'linear'
    })
    let query = wx.createSelectorQuery()
    query.select('.content-box').boundingClientRect()
    query.select('#text').boundingClientRect()
    query.exec((rect) => {
      that.setData({
        wrapWidth: rect[0].width,
        textWidth: rect[1].width
      }, () => {
        this.startAnimation()
      })
    })
  },
  // 定时器动画
  startAnimation() {
    //reset
    // this.data.animation.option.transition.duration = 0
    const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step({ duration: 0 })
    this.setData({
      animationData: resetAnimation.export()
    })
    // this.data.animation.option.transition.duration = this.data.duration
    const animationData = this.data.animation.translateX(-this.data.textWidth).step({ duration: this.data.duration })
    setTimeout(() => {
      this.setData({
        animationData: animationData.export()
      })
    }, 100)
    const timer = setTimeout(() => {
      this.startAnimation()
    }, this.data.duration)
    this.setData({
      timer
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.destroyTimer()
    this.setData({
      timer: null
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.destroyTimer()
    this.setData({
      timer: null
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})