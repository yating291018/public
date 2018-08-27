Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsdetailData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options)
    this.getnewsDetailData(options.url)
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
  getnewsDetailData (groupid) {
    let self = this
    wx.request({
      url: `https://m.toutiao.com/i${groupid}/info/?_signature=oRKX7hAQ-qALPddu6ifWnaESl.&i=${groupid}`,
      success (res) {
        console.log('res', res)
        self.setData({
          newsdetailData: res.data.data
        })
      }
    })
  }
  
})