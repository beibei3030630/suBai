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
    produceData: {},
    // 从选取地址页返回 携带来的地址信息
    addressInfo:{},
    pickedFlag:false,
    hasAddress:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(123)
    //拿到选择到的地址
    if(options.data){
      this.setData({
        addressInfo:JSON.parse(options.data),
        hasAddress:true
      })
    }
    // 以下为拿到当天日期
    let dateObj = new Date();
    let currentMonth = dateObj.getMonth() + 1;
    let currentDate = dateObj.getFullYear() + "-" + currentMonth + "-" + dateObj.getDate();
    this.setData({
      pickerDate: currentDate
    })
   //以下为拿到当前下单订单的goods_id
    let goodsData = JSON.parse(options.goodsData);
    this.setData({
      produceData:goodsData
    })
   
  },
  toAddressList() {
    wx.navigateTo({
      url: '../addressList/addressList',
    })
  },
  toMesgBoard(){
    wx.navigateTo({
      url: '../mesgBoard/mesgBoard',
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
  onShow: function(options) {
 
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