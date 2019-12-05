

const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
   /* 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(http)
    //http.post('/sign_in/mini_program_user')
  },
  //点击按钮 => 调用小程序原生的wx.login() => 获取参数 => 将参数通过http.post发送请求给服务器 => 最后微信返回一个用户user给你
  login(event) {
    console.log(event)
    let iv = event.detail.iv
    let encryptedData = event.detail.encryptedData
    let code
    wx.login({
      success(res) {
        console.log(res)
        code = res.code
        http.post('/sign_in/mini_program_user', {
          code: code,
          iv: iv,


          encryptedData: encryptedData,
          app_id: app_id,
          app_secret: app_secret,
        })
      }
    })
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
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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