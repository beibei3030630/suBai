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
}
export {
  orderModel
}