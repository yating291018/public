var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newdata: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this
    wx.showLoading({
      title: '加载中',
      mark: true
    })
    wx.request({
      url: app.globalData.toutiao + '/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A165CB1843FBC85&cp=5B83DB1C7855BE1&min_behot_time=0&_signature=Qgj-zAAAGYzoJ75MfcCOjEII.t&i=',
      success (res) {
        console.log('res', res)
        self.setData({
          newdata: res.data.data
        })
        wx.hideLoading()
      }
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
  enternewsdetail(e) {
    wx.navigateTo({
      url: '../newsdetail/newsdetail?url=' + e.currentTarget.dataset.articalurl,
    })
  }
})