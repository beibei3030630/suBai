import {
  httpP
} from "../utils/util-p.js";
class orderModel extends httpP {
  getOrderList(session_id) {
    return this.request({
      url: "orderlist",
      header: {
        "cookie":session_id
      }
    })
  }
  getServiceTime(service_day){
    return this.request({
      url:"servicetimeList?service_day="+service_day
    })
  }
}
export {
  orderModel
}