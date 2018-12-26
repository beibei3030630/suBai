import {
  httpData
} from "../config.js";
class httpP {
  request({
    url:url,
    data = {},
    method = "get",
    header = {
      "content-type": "application/json"
    }
  }) {
    return new Promise((resolve, reject) => {
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
          }
        },
        fail(err) {
          reject(err)
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
}
export {
  httpP
}