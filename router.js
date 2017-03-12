define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "supermarket": "supermarketFn",
        "book": "bookFn",
        "shop": "shopFn",
        "user": "userFn",
        "product":"productFn",
        "integral":"integralFn",
        "order":"orderFn",
        "position":"posFn",
        "search":"searchFn",
        "seckill":"seckillFn",
      //报错默认路由
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
              home.swiper();
              home.getData();
          })
      },
      supermarketFn: function() {
          require(['./modules/supermarket/supermarket.js'],function(supermarket){
            supermarket.render();
              supermarket.getData();
              supermarket.bindEvent();
          })
      },
      bookFn: function() {
          require(['./modules/book/book.js'],function(book){
            book.render();
            book.getData();
          })
      },
      shopFn: function() {
          require(['./modules/shop/shop.js'],function(shop){
           shop.render();
//            shop.bindEvent();
						shop.getData();
          })
      },
      userFn: function() {
          require(['./modules/user/user.js'],function(user){
            user.render();
          })
      },
      productFn: function() {
          require(['./modules/product/product.js'],function(pro){
            pro.render();
          })
      },
      integralFn: function() {
          require(['./modules/integral/integral.js'],function(integral){
            integral.render();
          })
      },
      orderFn: function() {
          require(['./modules/order/order.js'],function(order){
            order.render();
          })
      },
      posFn: function() {
          require(['./modules/position/position.js'],function(position){
            position.render();
          })
      },
      searchFn: function() {
          require(['./modules/search/search.js'],function(search){
            search.render();
          })
      },
      seckillFn: function() {
          require(['./modules/seckill/seckill.js'],function(seckill){
            seckill.render();
              seckill.getData();
          })
      },
      

      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
