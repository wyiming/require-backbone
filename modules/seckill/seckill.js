//定义
define(['text!./seckill.html','css!./seckill.css'],function(html){
	//渲染方法
	function render(){
		$('.container').html(html);
	}
	
	//ajax
	function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
			async:true,
			success:function(req) {
//				console.log(req);
				var req = JSON.parse(req);
				function miaoK(startI,endI){
					var secStr = "";
					$.each(req.product,function(i,elem){
						if(i>=startI && i<endI){

							secStr += "<div class='sth_sum'><div  class='sth_img'><img src='"+elem.img+"'></div>";
							secStr += "<div class='sec_sth'><p>"+elem.name+"</p>";
							secStr += "<p>"+elem.specifics+"</p>";
							secStr += "<p><span>￥</span><b>"+elem.price+"</b>/原价:"+elem.market_price+"</p>";
							secStr += "<p>"+elem.btnText+"</p></div></div>";
						}
					})
					$(".seckill_sth").empty();
					$(".seckill_sth").html(secStr);
					console.log(secStr);
				}
				miaoK(3,6);
			}

		})
	}
	
	function bindEvent(){
		
	}
	
	function swiper(){
		
	}
	return{
		render:render,
		getData:getData
	}
})