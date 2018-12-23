// component/login/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    authorized: {
      type: Boolean,
      value: null
    },
    status: {
      type: String,
      value: "" //判断是要注册还是登陆，注册值为register 登陆值为login
    },
    smsCodeSucced: {
      type: Boolean,
      value: false,
      observer: "submitSmsCode"
    },
    submitFailed: {
      type: Boolean,
      value: null,
      observer: "submitFailed"
    } //标识符 注册是否完成
  },

  /**
   * 组件的初始数据
   */
  data: {
    smsBtnBgc: "#09BA07",
    smsBtnVal: "获取验证码",
    confirmBtnBgc: "#09BA07",
    confirmBtnVal: "确认",
    confirmBtnDis: false,
    phoneNum: '', //获取手机输入框的内容
    smsBtnDisabled: false, //在倒计时获取验证码禁用
    smsCodeVal:null
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //  注册不成功 触动此函数 注册成功的话 就在页面中跳转了
    submitFailed() {
      this.setData({
        confirmBtnBgc: "#09BA07",
        confirmBtnVal: "确认",
        confirmBtnDis: false,
        smsCodeVal:''
      })  
    },
    // 提交注册信息
    submitRegister(e) {
      const registerData = {
        phoneNum: e.detail.value.phoneNumber,
        smsCode: e.detail.value.smscode
      }
      const checkPhoneNum = this._checkPhoneNum();
      const checkSmsCode = this._checkSmsCode(registerData.smsCode);
      if (checkPhoneNum && checkSmsCode) {
        this.setData({
          confirmBtnBgc: "#98E09B",
          confirmBtnVal: "提交中...",
          confirmBtnDis: true,
        })
        this.triggerEvent("submitRegister", {
          registerData
        }, {});
      }
    },
    // 获取验证码
    clickSmsBtn() {
      let checkPhoneNum = this._checkPhoneNum();
      if (checkPhoneNum) {
        wx.showToast({
          title: '验证码发送成功',
          icon: 'success'
        })
        this._cutDown()
        this.triggerEvent("getSmsCode", {
          phoneNum: this.data.phoneNum
        }, {})
      }
    },
    _cutDown() {
      const that = this;
      let count = 60;
      let si = setInterval(function() {
        if (count > 1) {
          count--;
          that.setData({
            smsBtnVal: count + ' s',
            smsBtnBgc: "#bdbdbd",
            smsBtnDisabled: true
          });
        } else {
          that.setData({
            smsBtnVal: "获取验证码",
            smsBtnBgc: "#44D242",
            smsBtnDisabled: false
          });
          count = count;
          clearInterval(si);
        }
      }, 1000);
    },
    // 获取手机号码，获取验证码时会用到
    _getPhoneNumber(e) {
      this.setData({
        phoneNum: e.detail.value
      })
    },
    //验证手机正则
    _regexConfig() {
      return /^1(3|4|5|7|8)\d{9}$/
    },
    // 验证手机号 不要传参了 要写两遍
    _checkPhoneNum() {
      let phoneNum = this.data.phoneNum;
      let regexConfig = this._regexConfig();
      if (phoneNum == '') {
        wx.showToast({
          title: '手机号不能为空',
          icon: 'none'
        })
        return false;
      } else if (!regexConfig.test(phoneNum)) {
        wx.showToast({
          title: '请输入正确手机号码',
          icon: "none"
        })
        return false;
      }
      return true
    },
    //验证 验证码
    _checkSmsCode(param) {
      if (param == '') {
        wx.showToast({
          title: '验证码不能为空',
          icon: 'none'
        })
        return false
      } else if (param.length < 4 && param.length > 0) {
        wx.showToast({
          title: '请输入格式正确的验证码',
          icon: 'none'
        })
        return false
      }
      return true
    }
  }
})