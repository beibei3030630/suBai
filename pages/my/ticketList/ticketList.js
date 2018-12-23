// pages/my/ticketList/ticketList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitle: ["未使用", "已使用", "已过期"],//之后做属性，拿出去
    currentTab: 0 ,//初始化列表，底边在第一个
    ticketListData:[
      {
        price: 70,
        priceDesc: "满400元可用",
        title: "优惠券类型一",
        starDate: "2018.12.12",
        endDate: "2018.12.21",
        priceDesc: "满400元可用"
      },
      {
        price: 70,
        priceDesc: "满400元可用",
        title: "优惠券类型一",
        starDate: "2018.12.12",
        endDate: "2018.12.21",
        priceDesc: "满400元可用"
      }, {
        price: 70,
        priceDesc: "满400元可用",
        title: "优惠券类型一",
        starDate: "2018.12.12",
        endDate: "2018.12.21",
        priceDesc: "满400元可用"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  clickTap(e) {
    let currentTab = e.currentTarget.dataset.current;
    this.setData({
      currentTab
    })
    console.log(this.data.currentTab)
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