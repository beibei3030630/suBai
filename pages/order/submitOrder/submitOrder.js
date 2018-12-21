// pages/order/submitOrder/submitOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    originPrice: "3999",
    discountPrice: "3999",
    // 产品展示列表
    produceData: {
      goods_name:"123",
       goods_title: "456",
       goods_price:"789"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },
  toAddressList(){
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})