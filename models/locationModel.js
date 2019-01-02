import {
  httpP
} from "../utils/util-p.js";
import {
  httpData
} from "../config.js";
class locationModel extends httpP {
  authorize(sCallback) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                success: function(res1) {
                  sCallback(res1)
                },
              })
            }
          })
        }
      }
    })
  }
  refreshAuthorize(sCallback) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userLocation']) {
          wx.getLocation({
            success: function(locationRes) {
              sCallback(locationRes)
            },
          })
        }
      }
    })
  }
  loadCity(log, lat) {
    return this.requestLocation({
      url: "https://api.map.baidu.com/geocoder/v2/?ak=" + httpData.locationAK + "&location=" + lat + ',' + log + '&output=json'
    })
  }
}
export {
  locationModel
}