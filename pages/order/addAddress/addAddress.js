// pages/order/addAddress/addAddress.js
import{
  orderModel
} from "../../../models/orderModel.js";
const ordermodel = new orderModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {  
    areaFlag:false,
    areaList:["80平米以下","80-99平米","100-119平米","120-139平米","140-159平米","160平米以上"],
    areaVal: "选择您的服务面积",
    isDefault:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 提交地址
  addressSumbit(e){
    console.log(e)
  },
  // 选择面积
  chooseArea(){
    this.setData({
      areaFlag:true
    })
  },
  // 得到面积的值
  getAreaVal(e){
    this.setData({
      areaVal: e._relatedInfo.anchorTargetText,
      areaFlag:false
    })
  },
  addressSumbit(e){
    let addressInfo=e.detail.value;
    console.log(addressInfo);
    let isDefault = this.data.isDefault;
    ordermodel.addAddress(addressInfo, isDefault).then(res=>{
      console.log(res.data)
      if(res.data.result==1){
        wx.showToast({
          title: '保存成功',
          success(){
            setTimeout(function(){
              wx.navigateTo({
                url: '../addressList/addressList',
              })
            },1000)
          }
        })
      }
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