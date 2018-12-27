// pages/home/proDetail/proDetail.js
import {
  homeModel
} from "../../../models/homeModel.js"
const homemodel = new homeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCity: "上海市",
    proDetailData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    homemodel.getProDetail(id).then(res => {
      this.setData({
        proDetailData: res.data.goods
      })
    })
  },
  toOrder() {
    this.data.proDetailData.goods_detail = encodeURIComponent(this.data.proDetailData.goods_detail)
    let goodsData = JSON.stringify(this.data.proDetailData);
    wx.navigateTo({
      url: '../../order/submitOrder/submitOrder?goodsData=' + goodsData,
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