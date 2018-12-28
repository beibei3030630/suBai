//pages/login/login.js
let globalData=getApp().globalData;
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
    prevPage: null,
    tempData: "https://www.2cto.com/kf/201808/770331.html"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  tapLogin(e) {
    wxLoginmodel.toLogin(res => {
      wx.setStorageSync("session_id", "session_id=" + res.session_id)
      this._upDateSessionID()
      let that = this;
      wx.showToast({
        title: '授权成功，正在跳转...',
        icon: 'none',
        success() {
          if (res.shopUser.phone) {
            that._loginSuccess(res)
          } else {
            that._skipRegister()
          }
        }
      })
    })
  },
  // login 返回上一页刷新 不会刷新app.js的数据 这里手动更新一下 
  _upDateSessionID(){
    globalData.session_id=wx.getStorageSync("session_id");
  },
  _loginSuccess(resData) {
    // 不用传递数据  my页面本来就会判断一下 有没有授权登录过 
    // 切换页面 可以在this.show中显示 在那里再判断一次就可以了
    // let pages = getCurrentPages();
    // let prevPage = pages[pages.length - 2];
    // prevPage.setData({
    //   userInfo: {
    //     nickName: resData.shopUser.username,
    //     avatarUrl: resData.shopUser.head_img,
    //     phoneNum: resData.shopUser.phone
    //   },
    //   authorized: true
    // })
    setTimeout(function() {
      wx.navigateBack({
        delta: 1
      })
    }, 2000)
  },
  _skipRegister() {
    wx.navigateTo({
      url: './register/register'
    })
  },
  gohome() {
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