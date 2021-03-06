const globalData = getApp().globalData;
import {
  httpP
} from "../utils/util-p.js";
class orderModel extends httpP {
  getOrderList() {
    return this.request({
      url: "orderlist",
      header: {
        "cookie": globalData.session_id
      }
    })
  }
  couponStatus(couponStatus) {
    return this.request({
      url: "usercoupon/list?status="+couponStatus,
      header:{
        "cookie": globalData.session_id
      }
    })
  }
  getServiceTime(service_day) {
    return this.request({
      url: "servicetimeList?service_day=" + service_day
    })
  }
  getAddressList() {
    return this.request({
      url: "app/address/list",
      header: {
        'content-type': "application/json",
        'cookie': globalData.session_id
      },
      method: "post"
    })
  }
  addAddress(addressInfo, isDefault) {
    return this.request({
      url: "app/address/add?ADDR_REALNAME=" + addressInfo.name + "&ADDR_PHONE=" + addressInfo.phoneNum + "&ADDR_CITY=" + addressInfo.city + "&ADDRESS=" + addressInfo.address + "&ADDR_AREA=" + addressInfo.area + "&IS_DEFAULT=" + isDefault,
      header: {
        'content-type': "application/json",
        'cookie': globalData.session_id
      },
      method: "post"
    })
  }
  addOrder(goods_id, address_id, service_time, servicetime_id){
    return this.request({
      url: "addorder?goods_id=" + goods_id + "&service_time=" + service_time + "&address_id=" + address_id + "&servicetime_id=" + servicetime_id +"&coupon_id=undefined&remark=undefined",
      header:{
        'content-type': "application/json",
        'cookie': globalData.session_id
      },
      method:"post"
    })
  }
}
export {
  orderModel
}