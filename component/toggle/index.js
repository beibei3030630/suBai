// component/toggle/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabTitle:["居家保洁","包年保洁","组合套餐"],//之后做属性，拿出去
    currentTab:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickTap(e){
      console.log(e.currentTarget.dataset.current);
      this.setData({
        currentTab:e.currentTarget.dataset.current
      })
    }
  }
})
