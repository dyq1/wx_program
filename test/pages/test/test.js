Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    hasMoreData:true,
    count:6,
    contents: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.getMusicInfo('正在加载数据...')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getMusicInfo('正在刷新数据')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.hasMoreData) {
      this.getMusicInfo('加载更多数据')
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/test/test'
    }
  },

  getMusicInfo: function (message) {
    var self = this
    //console.log(self.data.page);
    wx.request({
      url: 'https://wx.onlyido.com/wx_api.php',
      data: { 'function': 'getList' ,'page':self.data.page},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      success: function (res) {
        // success
        //console.log(res);
        if (res.data.result == ''){
          self.setData({
            hasMoreData: false
          })
        }else{
          var time = require('../../utils/util.js');
          var data = res.data.result;
          for (var i = 0, len = data.length; i < len; i++) {
            //console.log(data[i].created);
            data[i].created = time.formatTimeTwo(data[i].created, 'Y-M-D h:m:s');
          }
          //console.log(data);
          if (data.length >= 6){
            var flag = true;
          }else{
            var flag = false;
          }
          self.setData({
            page: self.data.page + 1,
            hasMoreData: flag,
            contents: data
          })
          //console.log(flag);
        }
      },
      fail: function () {
        wx.showToast({
          title: '加载数据失败',
        })
      }
      
    })
  }
})