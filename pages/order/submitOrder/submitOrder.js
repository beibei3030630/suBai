// pages/order/submitOrder/submitOrder.js
import {
  orderModel
} from "../../../models/orderModel.js";
const ordermodel = new orderModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickerDate: null,
    serviceId:null,
    serviceTimeList: [], // 服务时间标签
    originPrice: "3999",
    discountPrice: "3999",
    // 产品展示列表
    produceData: {
      goods_name: "123",
      goods_title: "456",
      goods_price: "789"
    },
    pickedFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let dateObj = new Date();
    let currentMonth = dateObj.getMonth() + 1;
    let currentDate = dateObj.getFullYear() + "-" + currentMonth + "-" + dateObj.getDate();
    this.setData({
      pickerDate: currentDate
    })
  },
  toAddressList() {
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },
  bindDateChange: function(e) {
    this.setData({
      pickedFlag:true,
      pickerDate:e.detail.value
    })
    this.getServiceTime(e.detail.value)
  },  
  getServiceTime(service_time) {
    ordermodel.getServiceTime(service_time).then(res => {
      let resultList = res.data.list;
      let tempArr = []
      for (var i in resultList) {
        tempArr.unshift({
          service_time: resultList[i].service_time,
          service_id: resultList[i].id
        })
      }
      this.setData({
        serviceTimeList: tempArr
      })
    })
  },
  getServiceId(event){
    let serviceId=event.detail.listId;
    let tagContent = event.detail.tagContent;
    this.setData({
      pickerDate:this.data.pickerDate+" "+tagContent,
      serviceId: serviceId,
      serviceTimeList:[],
      pickedFlag:false
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