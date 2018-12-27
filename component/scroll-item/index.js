// component/scroll-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    scrollData: {
      type: Object,
      value: {}
    },
    produceData:{
      type: Object,
      value: {}
    },
    // 是否需要按钮
    hasBook: {
      type: Boolean,
      value: true
    },
    // 按钮文字
    btnContent: {
      type: String,
      value: "预约"
    },
    border: {
      type: String,
      value: "normal"
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
    clickBtn() {
      this.triggerEvent("clickBtn",{goods_id:this.data.scrollData.id},{})
    }
  }
})