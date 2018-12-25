// pages/order/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    produceData: {
      img: "/images/1.jpg",
      title: "星际家 保洁包年 pro-A3 包年体验",
      desc: "12次日式保洁+2000元深度服务套餐"
    },
    // 0未付款， 1已付款 2已完成
    payStatus: 0,
    namePhone: "项云青 18770890623",
    address: "上海市长宁区东华大学国家大学科技园（福泉路)金钟路658弄",
    serviceTime: "服务时间 : 2018-12-25 10:12",
    order: "订单备注：无",
    ticketName: "苏百圣诞优惠券",
    ticketPirce: "-￥70",
    orderDetail: [{
        title: "服务金额",
        desc: "￥3999.00"
      },
      {
        title: "需付款",
        desc: "￥3929.00"
      },
      {
        title: "订单编号",
        desc: "3152402"
      },
      {
        title: "下单时间",
        desc: "2018.12.10 17:07:13"
      }
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
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