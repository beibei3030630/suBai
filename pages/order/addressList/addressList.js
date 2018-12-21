// pages/order/addressList/addressList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [{
        name: "向云清",
        phoneNum: "18770890623",
        address: "漕宝路401号3号楼2楼B座"

      },
      {
        name: "向云清",
        phoneNum: "18770890623",
        address: "漕宝路401号3号楼2楼B座"

      }
    ],
    defaultFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  swtichSelect(){
    this.setData({
      defaultFlag: !this.data.defaultFlag
    })
  },
  addAddress(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
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