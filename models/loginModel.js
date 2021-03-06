import {
  httpP
} from "../utils/util-p.js";
import {
  wxLogin
} from "../utils/util-login.js";
import {
  httpData
} from "../config.js";
class loginModel extends httpP {
  getSmsCode(phoneNum) {
    return this.request({
      url: "app/getcode?phone=" + phoneNum
    })
  }
  submitRegister(registerData, session_id) {
    return this.request({
      url: "app/bindphone?phone=" + registerData.phoneNum + "&code=" + registerData.smsCode,
      method: "post",
      header:{
        'content-type':'application/json',
        'cookie':session_id //试一下
      }
    })
  }
}

class wxLoginModel extends wxLogin {
  toLogin(sCallBack) {
    this.loginUtil((loginData) => {
      wx.request({
        url: httpData.appurl + "app/weixinlogin?code=" + loginData.code + "&iv=" + loginData.iv + "&encryptedData=" + loginData.encryptedData,
        header: {
          "content-type": "application/json"
        },
        success(res) {
          sCallBack(res.data)
        }
      })
    })
  }
}

// class firstLoginModel extends wxLogin {
//   toFirstLogin(sCallBack) {
//     this.firstLoginUtil((loginData) => {
//       wx.request({
//         url: httpData.appurl + "app/weixinlogin",
//         header: {
//           "content-type": "application/json"
//         },
//         data: loginData,
//         success(res) {
//           sCallBack(res.data)
//         }
//       })
//     })
//   }
// }
export {
  loginModel,
  wxLoginModel
}