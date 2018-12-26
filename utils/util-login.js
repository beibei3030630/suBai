class wxLogin {
  // 登陆
  loginUtil(sCallBack) {
    wx.login({
      success: function(res) {
        if (res.code) {
          wx.getSetting({
            success(res2) {
              if (res2.authSetting["scope.userInfo"]) {
                wx.getUserInfo({
                  success(res3) {
                    let loginData = {
                      code: res.code,
                      iv: res3.iv,
                      encryptedData: encodeURIComponent(res3.encryptedData)
                    }
                    sCallBack(loginData);
                  }
                })
              }else{
                wx.showToast({
                  title: '授权失败，正在跳转...',
                  icon:'none',
                  success(){
                    setTimeout(function(){
                      wx.navigateBack({
                        delta:1
                      })
                    },2000)
                  }
                })
              }
            }
          })
        }
      },
    })
  }
  //   //第一次登陆 返回code的信息 
  //   firstLoginUtil(scallBack) {
  //     wx.login({
  //       success(res) {
  //         if (res.code) {
  //           wx.getUserInfo({
  //             success(res2) {
  //               let userInfoData={
  //                 code:res.code,
  //                 iv:res2.iv,
  //                 encryptedData: encodeURIComponent(res2.encryptedData)
  //               }
  //               scallBack(userInfoData);
  //             }
  //           })
  //         }
  //       }
  //     })
  //   }
}
export {
  wxLogin
}