import {
  httpData
} from "../config.js";
class httpP {
  request({
    url: url,
    data = {},
    method = "get",
    header = {
      "content-type": "application/json"
    }
  }) {
    return new Promise((resolve, reject) => {
      const that = this;
      wx.request({
        url: httpData.appurl + url,
        header: header,
        method: method,
        data: data,
        success(res) {
          const resStatus = res.statusCode.toString();
          if (resStatus.startsWith(2)) {
            resolve(res);
          } else {
            reject(res)
            that._processError();
          }
        },
        fail(err) {
          reject(err)
          that._processError();
        }
      })
    })
  }
  requestLocation({
    url: url
  }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        header: {
          "content-type": "application/json"
        },
        success(res) {
          const resStatus = res.statusCode.toString();
          if (resStatus.startsWith(2)) {
            resolve(res)
          } else {
            reject(err)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }
  _processError() {
    wx.showToast({
      title: '尚未登录，请先登录...',
      icon: "none",
      success() {
        setTimeout(function() {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 2000)
      }
    })
  }
}
export {
  httpP
}