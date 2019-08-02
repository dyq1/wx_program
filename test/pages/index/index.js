// var app = getApp()
// var userInfo = null;
// Page({
//   data: {
//     info:{}
//   },
//   onLoad: function () {
//     var that = this;
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       // wx.getUserInfo({
//       //   success: res => {
//       //     app.globalData.userInfo = res.userInfo
//       //     this.setData({
//       //       userInfo: res.userInfo,
//       //       hasUserInfo: true
//       //     })
//       //   }
//       // })
//     //登录凭证校验。通过 wx.login() 接口获得临时登录凭证 code 后传到开发者服务器调用此接口完成登录流程。
//     wx.login({
//       success: function (res) {
//         //console.log(res);
//         if (res.code) {
//           //console.log("res.code:" + res.code);
//           //var d = that.globalData;//这里存储了appid、secret、token串  
//           //var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
//           wx.request({
//             url: "https://wx.onlyido.com/wx_api.php",
//             data: { 'function': 'getWxInfo', 'code': res.code},
//             header: {
//               'content-type': 'application/x-www-form-urlencoded' // 默认值
//             },
//             method: 'POST',
//             success: function (res) {
//               var jsonData = JSON.parse(res.data.result);
//               console.log(jsonData);
//               that.setData({
//                 info: jsonData
//               })
//               //wx.setStorageSync('user', obj);//存储openid 
//             }
//           });
//         } else {
//           console.log('获取用户登录态失败！' + res.errMsg)
//         }
//       }
//     });
//   }

// })


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    info:{'aa':'bb'}
  },
  onLoad: function () {
    var that = this;
    // 判断是否已经授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {//授权了，可以获取用户信息了
          // wx.getUserInfo({
          //   success: (res) => {
          //     console.log(res)
          //   }
          // })
          wx.login({
            success: function (res) {
              //console.log(res);
              if (res.code) {
                wx.request({
                  url: "https://wx.onlyido.com/wx_api.php",
                  data: { 'function': 'getWxInfo', 'code': res.code},
                  header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                  },
                  method: 'POST',
                  success: function (res) {
                    var jsonData = JSON.parse(res.data.result);
                    console.log(jsonData);
                    that.setData({
                      info: jsonData
                    })
                  }
                })
              }
            }
          })
        } else {//未授权，跳到授权页面
          wx.redirectTo({
            url: '../authorize/authorize',//授权页面
          })
        }
      }
    })
  },
})