let utilsData = require('../../utils/util.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressKeys: [],
    index: 0,
    expressData: {}
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      expressKeys: utilsData.getExpressKeys()
    })
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
    
  },
  queryResult (e) {
    let self = this
    let inputValue = e.detail.value
    let expressType = utilsData.getExpressValueByKey(this.data.expressKeys[this.data.index])
    wx.request({
      url: `${app.globalData.expressApi}/query?type=${expressType}&postid=${inputValue}&id=1`,
      success (res) {
        console.log('res', res)
        self.setData({
          expressData: res.data
        })
      }
    })
  }
})