import {httpP} from "../utils/util-p.js";
import {httpData} from "../config.js";
class locationModel extends httpP{
  authorize(sCallBack){
    wx.getSetting({
      success(res){
        if(!res.authSetting['scope.userLocation']){
          wx.authorize({
            scope: 'scope.userLocation',
            success(){
                wx.getLocation({
                  success: function(res) {
                    // 拿到经度 和 纬度
                    // res.longitude 
                    // res.latitude
                    sCallBack(res)
                  },
                })
            }
          })
        }
      }
    })
  }
  loadCity(log,lat){
    return this.requestLocation({
      url: "https://api.map.baidu.com/geocoder/v2/?ak=" + httpData.locationAK + "&location=" + lat + ',' + log + '&output=json'
    })
  }
}
export{locationModel}