// pages/order/cancelOrder/cancelOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reasoList:[
      "活动规则/产品协议有异议",
      "无工作人员联系",
      "搬家/出国/不需要了",
      "重新购买（买贵、买错、未用券）",
      "重复购买（多买一套）",
      "套餐有效期超过",
      "物品损害或遗失",
      "售后服务不满意"
    ],
    hookFlag:false,
    currentReson:null,
    reasonValue:'',
    otherReasonVal:'',
    dialogFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 选择取消理由
  clickReason(e){
    this.setData({
      hookFlag: !this.data.hookFlag,
      currentReson:e.currentTarget.dataset.currentIndex,
      reasonValue: e._relatedInfo.anchorTargetText
    })
  },
  // 提交其他理由
  submitOtherReason(e){
    let otherReasonVal=e.detail.value.otherReason;
    this.setData({
      dialogFlag:true,
      otherReasonVal: otherReasonVal
    })
    // 触发取消api
  },
  //dialog confim
  tapConfirm(){
    
    // 触犯取消api
  },
  tapCancel(){
    this.setData({
      dialogFlag:false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})