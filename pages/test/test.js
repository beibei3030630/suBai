// pages/test/test.js
import {
  httpP
} from "../../utils/util-p.js";
let test = new httpP();
var bmap = require('../../libs/bmap-wx.js');
import{
  locationModel
}from "../../models/locationModel.js";
let locationmodel = new locationModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "",
    sugData: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    locationmodel.authorize(res=>{
      this.loadCity(res.longitude,res.latitude)
    });
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
    // test.request({
    //   url:"orderlist"
    // }).then(res=>{
    //   console.log(res)
    // })
  },
  loadCity(log,lat){
    locationmodel.loadCity(log,lat).then(res=>{
      console.log(res)
    })
  },
  
  bindKeyInput: function (e) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'I95XYSppFZGnotARfNqleak4HuH3VtFW'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var sugData = '';
      for (var i = 0; i < data.result.length; i++) {
        sugData = sugData + data.result[i].name + '\n';
      }
      that.setData({
        sugData: sugData
      });
    }
    // 发起suggestion检索请求 
    BMap.suggestion({
      query: e.detail.value,
      region: '上海市',
      city_limit: true,
      fail: fail,
      success: success
    });
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得dialog组件

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