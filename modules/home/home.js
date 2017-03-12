//定义
define(['text!./home.html','css!./home.css','swiper'],function(html){
	//渲染方法
	function render(){
		$('.container').html(html);
		swiper();
	}
	
	//ajax
	function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
				var req = JSON.parse(req);
				function imgLun(startI,endI){
					var imgStr = "";
					$.each(req.data.slide,function(i,value){
						if(i>startI && i<endI){
							imgStr += "<div class='swiper-slide'><img src='"+value.activity.img+"'/></div>";
						}
					})
					$(".swiper-wrapper").empty();
					$(".swiper-wrapper").html(imgStr);

					var mySwiper = new Swiper ('.swiper-container', {
						autoplay: 2000,
						loop: true,
						pagination: '.swiper-pagination',
						autoplayDisableOnInteraction:false,
						speed:1000,
						effect:'fade',
						paginationClickable:true
					})
				}
				imgLun(0,5);
				function mainM(){
					var menuStr = "";
					var menuStr2 = ""
					$.each(req.data.menu,function(i,value){
						if(i<4){
							menuStr += "<dl><a href=''><dt><img src='"+value.activity.img+"'></dt>";
							menuStr += "<dd>"+value.activity.name+"</dd></a></dl>";
							//return;
						}else if(i<=7){
							menuStr2 += "<dl><dt><img src='"+value.activity.img+"'></dt>";
							menuStr2 += "<dd>"+value.activity.name+"</dd></dl>";
						}
					})
					
					$("#main1_1_up").html(menuStr);
					$("#main1_1_down").html(menuStr2);
					$("#main1_1_up dl").eq(1).find('a').attr({href:"#seckill"});
				}
				 mainM();
			}
		})

		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
			async:true,
			success:function(req){
				//console.log(req);
				var req = JSON.parse(req);
				function hotPut(startI,endI){
					var hotStr = "";
					$.each(req.data,function(i,elem){
						if(i>=0 && i<3){
							hotStr += "<figure class='main4-1'><img src='"+elem.img+"'>";
							hotStr += "<figcation><h2>"+elem.name+"</h2>";
							hotStr += "<p class='bor'><span>精选</span><a>"+elem.pm_desc+"</a></p>";
							hotStr += "<p class='gramm'>"+elem.specifics+"</p>";
							hotStr += "<p class='price'>￥"+elem.price+" <span>￥"+elem.market_price+"</span></p>";
							hotStr += "<img src='img/1/shouye (3).jpg'></figcation></figure>";
						}
					})
					//$(".main4").empty();
					$(".main4").html(hotStr);
				}
				hotPut(0,3);
			}
		})

	}

	function bindEvent(){
		
	}
	
	function swiper(){
		//var mySwiper = new Swiper ('.swiper-container', {
		//	autoplay: 2000,
		//	loop: true,
		//	pagination: '.swiper-pagination',
		//	autoplayDisableOnInteraction:false,
		//	speed:1000,
		//	effect:'fade',
		//	paginationClickable:true
		//})
	}
	return{
		render:render,
		swiper:swiper,
		getData:getData
	}
})
