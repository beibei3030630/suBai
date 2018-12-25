// component/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagContent: {
      value: "",
      type: String
    },
    listId: {
      value: "",
      type: String
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
    clickTag() {
      this.triggerEvent("clickTag", {
        listId: this.data.listId,
        tagContent:this.data.tagContent
      });
    }
  }
})