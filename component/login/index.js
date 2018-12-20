// component/login/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    authorized: Boolean
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
    tapLogin() {
      this.triggerEvent("tapLogin", {}, {})
    },
    tapBack(){
      this.triggerEvent("tapBack", {}, {})
    }
  }
})