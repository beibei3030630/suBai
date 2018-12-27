// pages/home/home.js
import {
  homeModel
} from "../../models/homeModel.js";
import {
  httpData
} from "../../config.js";
const homemodel = new homeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [],
    toggleData: null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    homemodel.getBannerImg().then(res => {
      let tempArr = [],
        tempUrl;
      for (var i in res.data) {
        tempUrl = res.data[i].ban_img;
        tempArr.push(tempUrl)
      }
      this.setData({
        imgUrl: tempArr
      })
    })
    homemodel.getProductList().then(res => {
      let goodslist = res.data.goodslist;
      let toggleFirstData = [];
      let toggleSecondData = [];
      let toggleThirdData = [];
      for (var i in goodslist) {
        let categoryId = goodslist[i].category_id;
        if (categoryId == "1") {
          toggleFirstData.push(goodslist[i]);
        } else if (categoryId == "2") {
          toggleSecondData.push(goodslist[i]);
        } else if (categoryId == "3") {
          toggleThirdData.push(goodslist[i]);
        }
      }
      let toggleDataTemp = {
        toggleFirstData,
        toggleSecondData,
        toggleThirdData
      };
      this.setData({
        toggleData: toggleDataTemp
      })
    })
  },
  toBook(e){
    wx.navigateTo({
      url: './proDetail/proDetail?id=' + e.detail.goods_id,
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