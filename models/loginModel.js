import {
  httpP
} from "../utils/util-p.js";
class loginModel extends httpP {
  getSmsCode(phoneNum) {
    return this.request({
      url: "app/getcode?phone=" + phoneNum
    })
  }
  submitRegister(registerData){
    return this.request({
      url:"app/bindphone",
      method:'post',
      data:{
        phone: registerData.phoneNum,
        code: registerData.smsCode
      }
    })
  }
}
export {
  loginModel
}