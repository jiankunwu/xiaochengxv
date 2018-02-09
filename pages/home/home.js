//index.js
//获取应用实例
// const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    scroll0Src:[
      {
        src: '../../imgs/pic0.jpg',
        dic:'pic0'
      }, {
        src: '../../imgs/pic1.jpg',
        dic: 'pic1'
      },  {
        src: '../../imgs/pic3.jpg',
        dic: 'pic3'
      }, {
        src: '../../imgs/pic4.jpg',
        dic: 'pic4'
      }, {
        src: '../../imgs/pic5.jpg',
        dic: 'pic5'
      }, {
        src: '../../imgs/pic6.jpg',
        dic: 'pic6'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // circular: true
    bookCity:"北京"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var that = this;
    var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
    var qqmapsdk = new QQMapWX({
      key: '45HBZ-V3U6X-7XE4A-ZXV6W-RSDPS-P2FZ2'
    });
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.ad_info.city;
            that.setData({
              bookCity: address,
            })
          }
        })
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

  }
})