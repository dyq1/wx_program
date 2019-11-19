//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    // 轮播图
    imgUrls: [
      {
        link: '../contents/index',
        url: '../../images/chart/1.jpg',
      },
      {
        link: '../contents/index',
        url: '../../images/chart/2.jpg',
      },
      {
        link: '../contents/index',
        url: '../../images/chart/3.jpg',
      },
      {
        link: '../contents/index',
        url: '../../images/chart/4.png',
      },
    ],

    //第二部分数据数组
    contentImgUrls: [
      {
        title: '年会',
        url: '../../images/page/c1.jpg',
        link: '../contents/index',
      }, {
        title: '轻量化',
        url: '../../images/page/c2.jpg',
        link: '../contents/index',
      }, {
        title: '新能源',
        url: '../../images/page/c3.jpg',
        link: '../contents/index',
      }, {
        title: '安全',
        url: '../../images/page/c4.jpg',
        link: '../contents/index',
      }
    ],
    //死三部分数据
    HotImgUrls: [
      {
        //头像地址,文字标题,文字内容,图片地址
        title: '好一个大汽车',
        content: '啊飒飒法大大配送点阿萨德卡搜客肉片看风使舵傲世狂妃萨克付款方式SDK发送到开发开放任务是开发商的开发商的开发商的开发商的开发商代理费问哦pork上岛咖啡施蒂利克发烧都上岛咖啡上岛咖啡。',
        url: '../../images/page/c1.jpg',
        link: '../contents/index',
      },
      {
        title: '你看,你看不看',
        content: '问问企鹅让的想法而奋斗盛世嫡妃。',
        url: '../../images/page/c3.jpg',
        link: '../contents/index',
      },
      {
        title: '快来啊,开始了',
        content: '爱仕达大所多撒多撒奥所多撒多撒多无。',
        url: '../../images/page/c5.jpg',
        link: '../contents/index',
      },
      {
        title: '上啊,冲啊,抢啊',
        content: '尼斯爱我家四省纪委对吉安市军分区我几点上课两年多。',
        url: '../../images/page/c6.jpg',
        link: '../contents/index',
      }
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function (e) {
    
  }
})
