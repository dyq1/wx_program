Page({

  /**
   * 页面的初始数据
   */
  data: {
    contents:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'https://wx.onlyido.com/wx_api.php',
      data: { 'function': 'getContent', "cid": options.cid},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',

      success: function (res) {
        // success
        var time = require('../../utils/util.js');
        var data = res.data.result;
        data.created = time.formatTimeTwo(data.created, 'Y-M-D h:m:s');
        
        self.setData({
          contents: data
        })
        
      },
      fail: function () {
        self.setData({
          contents: "加载失败"
        })
      }
    })
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
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})