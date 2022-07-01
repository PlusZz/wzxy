// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
var util = require('../../utils/util')

Page({
  data: {
    startTime:'',
    overTime:'',
},

  //给按钮绑定getTime事件
    getTime:function(){
        var time = util.formatTime(new Date())
        //为页⾯中time赋值
        this.setData({
            time:time
        })
    },
   
    detail:function(){
        wx.navigateTo({
            url: '../detail/detail',
          })
    },
  onLoad() {
  }
})
