// component/myList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: ''
    }, //左侧图标
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
    borderIndent:{
      type:String,
      value:"noraml"
    },//下边框缩进
    border:{
      type:String,
      value:"normal"
    },
    borderWeight:{
      type:String,
      value:'1rpx'
    },
    borderColor:{
      type:String,
      value:'#dfdfdf'
    },
    borderColor:{
      type:String,
      value:"#dfdfdf"
    },
    borderWeight:{
      type:String,
      value:"1rpx"
    }
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

  }
})