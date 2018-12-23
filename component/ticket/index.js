// component/ticketList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ticketData: {
      type: Object,
      value: {
        price: 70,
        priceDesc: "满400元可用",
        title: "优惠券类型一",
        starDate: "2018.12.12",
        endDate: "2018.12.21",
        priceDesc: "满400元可用"
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})