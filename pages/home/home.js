var bmap = require('../../utils/bmap-wx.js')
var moveJson = require('../../data/move.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbarList: ['首页', '周边', '电影', '新闻', '更多'],
    initIndex: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    indexSelect: 0,
    weatherdata: {},
    low: '',
    high: '',
    moveData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var BMap = new bmap.BMapWX({
      ak: app.globalData.baidukey
    })
    this.getWeatherData(BMap)
    this.getMoveData(moveJson)
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
    // wx.showNavigationBarLoading()
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
  changeinitIndex (event) {
    this.setData({
      initIndex: event.currentTarget.dataset.index
    })
  },
  changeindexSelect (event) {
    console.log('event', event)
    this.setData({
      indexSelect: event.detail.current
    })
  },
  enterPosition () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  // 当前天气
  currentweather () {
    wx.setStorageSync('weatherdata', this.data.weatherdata)
    wx.navigateTo({
      url: `../weather/weather?low=${this.data.low}&high=${this.data.high}`,
    })
  },
  // 拿到天气的数据
  getWeatherData(BMap) {
    var that = this
    wx.showLoading({
      title: '加载中...',
      mark: true
    })
    wx.getLocation({
      success(res) {
        BMap.regeocoding({
          location: res.latitude + ',' + res.longitude,
          success(data) {
            var city = data.originalData.result.addressComponent.city
            wx.request({
              url: app.globalData.weatherApi + '/open/api/weather/json.shtml?city=' + city,
              success(weather) {
                var low = weather.data.data.forecast[0].low.split(' ')[1]
                var high = weather.data.data.forecast[0].high.split(' ')[1]
                that.setData({
                  weatherdata: weather.data,
                  low: low,
                  high: high
                })
                wx.hideLoading()
              }
            })
          }
        })
      }
    })
  },
  // 得到电影信息
  getMoveData(moveJson) {
    this.setData({
      moveData: moveJson
    })
  },
  // 进入跟多电影页面
  entermore () {
    wx.switchTab({
      url: '../moves/moves'
    })
  }
})