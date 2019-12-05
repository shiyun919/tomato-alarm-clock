// pages/timer/timer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultTime: 1500,
    time: '',
    timer: null,
    showText: 'stop',
    contentVisible: true,
    visible: false
  },

   /**
    * 生命周期函数--监听页面显示
    */
  onShow: function () {
    this.startTimer()
  },
  changeTime(){
    let m = parseInt(this.data.defaultTime/60)
    let s = parseInt(this.data.defaultTime%60)
    
    if(m < 10){
      m = "0" + m
    }
    if (s < 10) {
      s = "0" + s
    }
    console.log(`${m}:${s}`)
    this.setData({ time: `${m}:${s}`}) 
  },
  startTimer(){
    this.changeTime()
    this.setData({showText: 'stop'})
    this.setData({ contentVisible: true})
    this.timer = setInterval(()=>{
      this.data.defaultTime = this.data.defaultTime - 1
      if(this.data.defaultTime <= 0){
        this.setData({contentVisible: false})
        this.clearTimer()
      }
      this.changeTime()
    },1000)
  },
  clearTimer(){
    clearInterval(this.timer)
    this.setData({ showText: 'start' })
  },
  abandon(){
    this.clearTimer()
    this.setData({visible: true})
  },
  comfirmReason(event){
    console.log(event)
    console.log(event.detail)
    let content = event.detail
    wx.switchTab({
      url: '/pages/home/home'
    })
    this.setData({ defaultTime: 1500 })
    this.setData({ visible: false })
  },
  hideComfirm(){
    this.setData({ visible: false })
    this.startTimer()
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.clearTimer()
    this.setData({ defaultTime: 1500 })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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