// index.ts

import { overTime } from "../../utils/util";

// 获取应用实例
const app = getApp<IAppOption>()
var util = require('../../utils/util')

Page({
  data: {
    Time:'',
    overTime:'',
},

getTime:function(e){
    var that = this;
    var currentTime = util.formatTime(new Date());
  },
   
    detail:function(){
        wx.navigateTo({
            url: '../detail/detail?Time=' + this.data.Time + '&overTime=' + this.data.overTime
          })
    },
  onLoad() {
    var that = this;
    that.setData({
        Time: util.formatTime(new Date()),
        overTime: util.overTime(new Date())
    });    
  }
})
