// component/myList/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {
    icon: {
      type: String,
      value: ''
    }, //左侧图标
    rightIcon:{
      type: String,
      value: '/images/arrow.png'
    },
    rIconWidth:{
      type: String,
      value: '25rpx'
    },
    img: {
      type: String,
      value: ''
    }, //左侧图片
    title: {
      type: String,
      value: ''
    }, //标题
    detail: {
      type: String,
      value: ''
    }, //标题描述
    desc: {
      type: String,
      value: ''
    }, //描述
    descIndent: {
      type: String,
      value: 'normal'
    }, //描述符缩进
    setArrow: {
      type: Boolean,
      value: true
    }, //是否使用箭头
    titleIndent: {
      type: String,
      value: "noraml"
    }, //标题缩进
    borderIndent: {
      type: String,
      value: "noraml"
    }, //下边框缩进
    border: {
      type: String,
      value: "normal"
    }, //是否需要下边框
    borderStyle: {
      type: String,
      value: ""
    }, //设置边框颜色 粗细，style优先级最高如果设置了会覆盖掉border  none
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowSrc: "/images/arrow.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(e){
      this.triggerEvent("onClick",{detail:e.detail},{})
    },
    clickIcon(e){
      this.triggerEvent("clickIcon", { detail: e.detail }, {})
    }
  }
})