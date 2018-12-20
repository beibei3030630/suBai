// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    authorized: false,
    mainList: [{
        icon: "/images/listTest.png",
        title: "余额",
        desc: '',
        setArrow: false
      },
      {
        icon: "/images/listTest.png",
        title: "手机号",
        desc: '绑定手机号',
        setArrow: false,
        descIndent:'none'
      },
      {
        icon: "/images/listTest.png",
        title: "我的地址",
        desc: '',
        setArrow: true
      },
      {
        icon: "/images/listTest.png",
        title: "优惠券",
        desc: '',
        setArrow: true
      }
    ],
    singleList: [{
      icon: "/images/listTest.png",
      title: "联系客服",
      setArrow: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.userAuthorize();
  },
  // 判断是否授权 刷新时用
  userAuthorize() {
    wx.getSetting({
      success: res => {
        const scope = res.authSetting['scope.userInfo'];
        if (scope) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo;
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
      wx.setStorage({
        key: 'loginStatue',
        data: 'authorize',
      })
    } else {
      wx.showToast({
        title: '授权失败',
        icon: "none"
      })
    }
  },
  toContact(){
    wx.navigateTo({
      url: './contact/contact',
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