require.config({
  paths:{
    'jquery':'lib/jquery-v3.1',
    'backbone':'lib/backbone',
    'underscore':'lib/underscore',
    'text':'lib/text',
    'css':'lib/css',
    'swiper':'modules/home/swiper-3.3.1.min',
    'md5':'lib/md5'
  }
});

require(['jquery','backbone','./router.js'],function($,Backbone){

  Backbone.history.start();
})
