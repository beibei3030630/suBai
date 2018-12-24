// pages/test/test.js
import {
  httpP
} from "../../utils/util-p.js";
let test = new httpP();
var bmap = require('../../libs/bmap-wx.js');
import {
  locationModel
} from "../../models/locationModel.js";
let locationmodel = new locationModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: "",
    sugData: '',
    min: "00",
    second: "00",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://mall.xinwenyifuxing.com/mallapp/orderlist',
      success(res) {
        //  console.log(res)
      }
    })
    let that = this;
    wx.login({
      success(res) {
        if (res.code) {
          wx.getSetting({
            success(res2) {
              if (res2.authSetting["scope.userInfo"]) {
                wx.getUserInfo({
                  success(res3) {
                    let code = res.code;
                    let iv = res3.iv;
                    let encryptedData = encodeURIComponent(res3.encryptedData);
                    // console.log(code);
                    // console.log(iv);
                    // console.log(encryptedData);
                    that.login(code, iv, encryptedData);
                  }
                })
              }
            }
          })
        }
      }
    })
    // locationmodel.authorize(res => {
    //   this.loadCity(res.longitude, res.latitude)
    // });
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
    // this.resetTime(600);
    // wx.request({
    //   url: "http://mall.xinwenyifuxing.com/mallapp/app/getcode",
    //   method:'post',
    //   data:{
    //     phone:"15000199635"
    //   },
    //   success(res) {
    //       console.log(res)
    //   }
    // })
    // wx.login({
    //   success(res){
    //       console.log(res)
    //   },
    //   fail(err){
    //     console.log(err)
    //   }
    // })

  },
  login(code, iv, encryptedData) {
    console.log(code);
    console.log(iv);
    console.log(encryptedData);
    var that = this;
    wx.request({
      url: 'http://mall.xinwenyifuxing.com/mallapp/app/weixinlogin?code='+code+"&iv="+iv+"&encrytedData="+encryptedData,
      method: 'post',
      header:{
        "content-type":"application/json"
      },
      success(res) {
        console.log(res)
      }
    })
  },
  loadCity(log, lat) {
    locationmodel.loadCity(log, lat).then(res => {
      console.log(res)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得dialog组件

  },

  // 倒计时
  resetTime: function(time) {
    var that = this;
    var timer = null;
    var t = time;
    var m = 0;
    var s = 0;
    m = Math.floor(t / 60 % 60);
    m < 10 && (m = '0' + m);
    s = Math.floor(t % 60);

    function countDown() {
      s--;
      s < 10 && (s = '0' + s);
      if (s.length >= 3) {
        s = 59;
        m = "0" + (Number(m) - 1);
      }
      if (m.length >= 3) {
        m = '00';
        s = '00';
        clearInterval(timer);
        console.log("结束了");
      }
      console.log(m + "分钟" + s + "秒");
      that.setData({
        min: m,
        second: s
      })
    }
    timer = setInterval(countDown, 1000);

  },

  bindKeyInput: function(e) {
    var that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'I95XYSppFZGnotARfNqleak4HuH3VtFW'
    });
    var fail = function(data) {
      console.log(data)
    };
    var success = function(data) {
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