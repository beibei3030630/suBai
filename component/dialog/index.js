// component/dialog/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:"温馨提示"
    },
    content: {
      type: String,
      value: "您确定取消订单吗？"
    },
    confirmContent: {
      type: String,
      value: "确定"
    },
    cancelContent: {
      type: String,
      value: "再想想"
    },
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
    cancel() {
      this.triggerEvent("tapCancel", {}, {})
    },
    confirm() {
      this.triggerEvent("tapConfirm", {}, {})
    }
  }
})
