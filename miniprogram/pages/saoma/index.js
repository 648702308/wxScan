// scan.js
// 移动动画
Page({
  data: {

  },
  onLoad: function () {
    
  },
  onShow() {
    // wx.nextTick(()=>{
    //   setTimeout(()=>{
    //     this.selectComponent('#scanCode').start()
    //   },500)
    // })
  },
  donghua() {
    
  },
  scancode(e) {
    // 校验扫描结果，并处理
    let res = e.detail.result
  },
  onHide() {
    
  },
  onUnload(){
    
  }
})