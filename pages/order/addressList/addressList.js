// pages/order/addressList/addressList.js
import {
  orderModel
} from "../../../models/orderModel.js";
const ordermodel = new orderModel();
let globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [],
    defaultFlag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 获取地址列表
  getAddressList() {
    ordermodel.getAddressList().then(res => {
      console.log(res.data)
      this.setData({
        addressList: res.data.addrlist
      })
    })
  },
  swtichSelect() {
    this.setData({
      defaultFlag: !this.data.defaultFlag
    })
  },
  addAddress() {
    wx.redirectTo({
      url: '../addAddress/addAddress',
    })
  },
  //选取地址，点击后携带点击的地址内容返回上一页
  chooseAddress(e) {
     let currentIndex = e.currentTarget.dataset.currentIndex;
    // let addressInfo = JSON.stringify(this.data.addressList[currentIndex]);
    // wx.navigateTo({
    //   url: '../submitOrder/submitOrder?data=' + addressInfo,
    // })
    // 选择地址列表 还可以新增地址 所以返回的话 有可能会返回到新增地址页面
    // 所以以下方法不好用
    let pages=getCurrentPages();
    let prevPage=pages[pages.length-2];
    prevPage.setData({
      addressInfo: this.data.addressList[currentIndex],
      hasAddress:true
    })
    wx.navigateBack({
      delta:1
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
    console.log(globalData.session_id)
    this.getAddressList();
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