// component/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: Array,
    interval: {
      type: Number,
      value: 2000
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dots: true,
    autoplay: true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})