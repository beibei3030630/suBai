// component/toggle/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toggleData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabTitle: ["居家保洁", "包年保洁", "组合套餐"], //之后做属性，拿出去
    currentTab: 0 //初始化列表，底边在第一个
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTap(e) {
      let currentTab = e.currentTarget.dataset.current;
      this.setData({
        currentTab
      })
    },
    clickBtn(e) {
      this.triggerEvent("clickBtn", {
        goods_id: e.detail.goods_id
      }, {})
    }
  }
})