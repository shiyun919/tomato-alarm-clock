// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:  {
        本周二: [
          { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具", finished: true }
        ]
      ,

      
        本周三: [
          { time: "14: 00", text: "实施四点半但我觉得冰岛大实施四点半但我觉得冰岛大狙灯实施四点半但我觉", finished: true },
          { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具fff", finished: true }
        ]
      ,


      
        本周四: [
          { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具", finished: true },
          { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具fff", finished: true },
          { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具5555", finished: true }
        ]
      },

    task: {
      本周一: [
        { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具", finished: true }
      ]
      ,


      本周二: [
        { time: "14: 00", text: "实施四点半但我觉得冰岛大实施四点半但我觉得冰岛大狙灯实施四点半但我觉", finished: true }
      ]
      ,



      本周三: [
        { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具", finished: true },
        { time: "14: 00", text: "实施四点半但我觉得冰岛大狙灯具fff", finished: true }
      ]
    },

    
    tabName: 'history'
  },
  clickTab(event){
    console.log(event.currentTarget.dataset.name)
    let name = event.currentTarget.dataset.name
    this.setData({tabName: name})
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

  },

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