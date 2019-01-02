// component/addressSearch/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchResult: {
      type: Array,
      value: []
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
    getAddress(e) {
      let address = e.currentTarget.dataset.address;
      this.triggerEvent("getAddress", {
        address: address
      }, {})
    }
  }
})