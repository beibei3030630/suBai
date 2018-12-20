import {
  httpP
} from "../utils/util-p.js";
class homeModel extends httpP {
  getBannerImg() {
    return this.request({
      url: "app/banner/list"
    })
  }
  getProductList(){
    return this.request({
      url:"app/goods/list"
    })
  }
  getProDetail(goodsId){
    return this.request({
      url:"app/goods/info",
      data:{
        goods_id:goodsId
      }
    })
  }
}
export {
  homeModel
}