// pages/order/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"苏白日式家居保洁*1",
    price:"3999",
    m:"09",
    s:"59"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.resetTime(600)
  },
  resetTime: function (time) {
    var that = this;
    var timer = null;
    var t = time;
    var m = 0;
    var s = 0;
    m = Math.floor(t / 60 % 60);
    m < 10 && (m = '0' + m);
    s = Math.floor(t % 60);

    function countDown() {
      s--;
      s < 10 && (s = '0' + s);
      if (s.length >= 3) {
        s = 59;
        m = "0" + (Number(m) - 1);
      }
      if (m.length >= 3) {
        m = '00';
        s = '00';
        clearInterval(timer);
      }
      console.log(m + "分钟" + s + "秒");
      that.setData({
        m: m,
        s: s
      })
    }
    timer = setInterval(countDown, 1000);
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