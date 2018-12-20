// pages/test/test.js
import {
  httpP
} from "../../utils/util-p.js";
let test = new httpP();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.login({
    //   success: function(res) {
    //     test.request({
    //       url: "app/weixinlogin",
    //       data: {
    //         code: res.code
    //       }
    //     }).then(
    //       res => {
    //         // console.log(res)
    //       }
    //     )
    //   }
    // })
    test.request({
      url:"orderlist"
    }).then(res=>{
      console.log(res)
    })
  },
  onTest: function() {
    wx.login({
      success: function(res) {
        test.request({
          url: "app/weixinlogin",
          data: {
            code: res.code
          }
        }).then(
          res => {
            console.log(res)
          }
        )
      }
    })
  },
  tapLogin(){
    console.log(123)
  },
  tapBack(){
    console.log(456)
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