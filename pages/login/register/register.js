// pages/login/register/register.js
import {
  loginModel
} from "../../../models/loginModel.js";
const loginmodel = new loginModel();
let globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */

  data: {
    smsCodeSucced: null,
    submitFailed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  getSmsCode(e) {
    loginmodel.getSmsCode(e.detail.phoneNum).then(res => {
      console.log(res)
    })
  },
  submitRegister(e) {
    const registerData = e.detail.registerData;
    let session_id = globalData.session_id;
    console.log(session_id);
    loginmodel.submitRegister(registerData, session_id).then(res => {
      console.log(res)
      if (res.data.result == 1) {
        let that=this;
        wx.showToast({
          title: res.data.message,
          icon: 'success',
          success(){
            that._successRegister()
          }
        })
      } else if (res.data.result == -1) {
        wx.showToast({
          title: res.data.message,
          icon: 'none'
        })
        this.setData({
          // 每次都要取自己相反的值才能触动组件中的修改确认按钮样式的事件
          submitFailed: !this.data.submitFailed
        })
      }
    })
  },
  _successRegister(){
    setTimeout(function () {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }, 1500)
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