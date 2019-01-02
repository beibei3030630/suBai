// pages/order/addAddress/addAddress.js
import {
  orderModel
} from "../../../models/orderModel.js";
const ordermodel = new orderModel();
import {
  locationModel
} from "../../../models/locationModel.js";
const locationmodel = new locationModel();
import {
  httpData
} from "../../../config.js";
let bmap = require("../../../libs/bmap-wx.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    areaFlag: false,
    currentCity: '',
    searchResult: [], //地址联想结果
    areaList: ["80平米以下", "80-99平米", "100-119平米", "120-139平米", "140-159平米", "160平米以上"],
    areaVal: "选择您的服务面积",
    isDefault: false,
    searchFlag: false,
    addressVal: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 授权获得地理位置 获取当前所在城市
    // 第一次授权登录
    locationmodel.authorize(res => {
      this.loadCity(res.longitude, res.latitude);
      console.log(res)
    })
    // 刷新之后
    locationmodel.refreshAuthorize(res => {
      this.loadCity(res.longitude, res.latitude);
    })
  },
  // 通过百度云地图 拿到当前城市
  loadCity: function(log, lat) {
    locationmodel.loadCity(log, lat).then(res => {
      this.setData({
        currentCity: res.data.result.addressComponent.city
      })
    })
  },
  // 地址联想
  bindKeyInput: function(e) {
    var that = this;
    if (e.detail.value == '') {
      that.setData({
        searchFlag: false
      })
    }
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: httpData.locationAK
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
      console.log(data)
      var sugData = [];
      for (var i = 0; i < data.result.length; i++) {
        sugData.push(data.result[i].name);
      }
      that.setData({
        searchResult: sugData,
        searchFlag: true
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: e.detail.value,
      region: that.data.currentCity,
      city_limit: true,
      fail: fail,
      success: success
    });
  },
  // 点击获取地址
  getAddress(e) {
    this.setData({
      addressVal:e.detail.address,
      searchFlag:false
    })
  },
  //回车 收起地址联想模板
  confirmAddress(){
    this.setData({
      searchFlag:false
    })
  },
  // 提交地址
  addressSumbit(e) {
    console.log(e)
  },
  // 选择面积
  chooseArea() {
    this.setData({
      areaFlag: true
    })
  },
  // 得到面积的值
  getAreaVal(e) {
    this.setData({
      areaVal: e._relatedInfo.anchorTargetText,
      areaFlag: false
    })
  },
  addressSumbit(e) {
    let addressInfo = e.detail.value;
    console.log(addressInfo);
    let isDefault = this.data.isDefault;
    ordermodel.addAddress(addressInfo, isDefault).then(res => {
      console.log(res.data)
      if (res.data.result == 1) {
        wx.showToast({
          title: '保存成功',
          success() {
            setTimeout(function() {
              wx.navigateTo({
                url: '../addressList/addressList',
              })
            }, 1000)
          }
        })
      }
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