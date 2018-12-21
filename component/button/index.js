// component/button/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:{
      type:String,
      value:''
    },
    background:{
      type:String,
      value:"#09BA07"
    },
    color:{
      type:String,
      value:"#fff"
    },
    size:{
      type:String,
      value:"34rpx"
    },
    border:{
      type:String,
      value:''
    },
    borderRadius:{
      type:String,
      value:"10rpx"
    },
    letterSpacing:{
      type: String,
      value: "2rpx"
    },
    width:{
      type: String,
      value: "90%"
    },
    margin:{
      type: String,
      value: "0 auto 30rpx"
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
    tapBtn(e){
        this.triggerEvent('tapBtn',{},{})
    }
  }
})
