Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths: [],
    downloadPicturePath: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 预览下载的图片
   */
  preview_download_picture: function() {
    wx.previewImage({
      current: this.data.downloadPicturePath,
      urls: this.data.downloadPicturePath,
    })
  },
  /**
   * 下载图片方法
   */
  download: function() {
    var that = this;
    wx.downloadFile({
      url: "https://wx.onlyido.com/download/1480663368.jpg",
      success: function(res) {
        console.log(res)
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          // wx.playVoice({
          //   filePath: res.tempFilePath
          // })
          wx.showToast({
            title: '下载成功',
            icon: '',
            mask: true,
            duration: 1500
          })
          that.setData({
            downloadPicturePath: res.tempFilePath //将下载的图片路径传给页面显示
          })
        }
        //保存下载的图片到本地
        wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
          success:
            function (data) {
              console.log(data);
              // wx.showModal({
              //   title: '下载成功',
              //   content: '下载成功',
              // })
              wx.showToast({
                title: '下载成功',
                icon: '',
                mask: true,
                duration: 1500
              })  
              that.setData({
                downloadPicturePath: res.tempFilePath
              })
            },
        })
      }
    });
  },

  /**
   * 上传图片
   * **/
  upload: function() {
    let that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res => {
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths;
        that.setData({
          tempFilePaths: tempFilePaths
        })
        /**
         * 上传完成后把文件上传到服务器
         */
        var count = 0;
        //上传文件
        for (var i = 0; i < tempFilePaths.length; i++) {
          
          wx.uploadFile({
            url: "https://wx.onlyido.com/wx_api.php", //请求上传的url
            filePath: tempFilePaths[i],
            name: 'file',
            header: {
              "Content-Type": "application/x-www-form-urlencoded;multipart/form-data"
            },
            success: function(res) {
              //console.log(JSON.parse(res.data));
              var jsonres = JSON.parse(res.data);
              if (jsonres.code == 200){
                count++;
                //如果是最后一张,则隐藏等待中  
                if (count == tempFilePaths.length) {
                  wx.hideToast();
                }
                wx.showToast({
                  title: '上传成功',
                  icon: '',
                  mask: true,
                  duration: 1500
                })
              }else{
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: jsonres.message,
                  showCancel: false,
                  success: function (res) { }
                })
              }
            },
            fail: function(res) {
              wx.hideToast();
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败',
                showCancel: false,
                success: function(res) {}
              })
            }
          });
        }
      }
    })
  },

  /**
   * 预览图片方法
   */
  listenerButtonPreviewImage: function(e) {
    let index = e.target.dataset.index;
    let that = this;
    wx.previewImage({
      current: that.data.tempFilePaths[index],
      urls: that.data.tempFilePaths,
      //这根本就不走
      success: function(res) {
        //console.log(res);
      },
      //也根本不走
      fail: function() {
        //console.log('fail')
      }
    })
  },
})