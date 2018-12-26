//pages/login/login.js
import {
  wxLoginModel
}
from "../../models/loginModel.js";
let wxLoginmodel = new wxLoginModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prevPage:null,
    tempData: "https://www.2cto.com/kf/201808/770331.html"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let pages = getCurrentPages(); // 获取页面栈
    this.data.prevPage = pages[pages.length - 2];
    
    console.log(pages.length);
   },
  tapLogin(e) {
    wxLoginmodel.toLogin(res => {
      console.log(res)
      wx.setStorageSync("session_id", "session_id=" + res.session_id)
      
    })
  },
  gohome(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
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