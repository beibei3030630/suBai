// pages/order/orderList.js
import {
  orderModel
} from "../../models/orderModel.js";
let ordermodel = new orderModel();
let globalData=getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
        orderTime: "2018.12.10 17:07.13",
        serviceCount: 9,
        title: "星际家保洁包年包时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时时服务时服务时包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包年",
        serviceStatus: "订单服务中",
        serviceTime: "2018 12 21",
        serviceAddress: "服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时",
        price: "3999"
      },
      {
        orderTime: "2018.12.10 17:07.13",
        serviceCount: 9,
        title: "星际家保洁包年包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包年",
        serviceStatus: "订单服务中",
        serviceTime: "2018 12 21",
        serviceAddress: "服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时",
        price: "3999"
      },
      {
        orderTime: "2018.12.10 17:07.13",
        serviceCount: 9,
        title: "星际家保时服务时服务时服务时服务时服务时服务时服务时服务洁包年包洁包洁包包年包洁包包年包洁包包年包洁包包年包洁包包年包洁包包年包洁包包年包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包年",
        serviceStatus: "订单服务中",
        serviceTime: "2018 12 21",
        serviceAddress: "服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时",
        price: "3999"
      },
      {
        orderTime: "2018.12.10 17:07.13",
        serviceCount: 9,
        title: "星际家保洁包年包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包年",
        serviceStatus: "订单服务中",
        serviceTime: "2018 12 21",
        serviceAddress: "服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时",
        price: "3999"
      },
      {
        orderTime: "2018.12.10 17:07.13",
        serviceCount: 9,
        title: "星际家保洁包年包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包洁包年",
        serviceStatus: "订单服务中",
        serviceTime: "2018 12 21",
        serviceAddress: "服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时服务时",
        price: "3999"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(globalData.session_id);
    ordermodel.getOrderList(globalData.session_id).then(res=>{
      console.log(res)
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