import {
  httpData
} from "../config.js";
class httpP {
  request({
    url:url,
    data={},
    method="get"
  }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: httpData.appurl + url,
        header: {
          "content-type": "application/json"
        },
        method: method,
        data: data,
        success(res) {
          const firstNum = res.statusCode.toString();
          if (firstNum.startsWith(2)) {
            resolve(res);
          } else {

          }
        }
      })
    })

  }
}
export {httpP}