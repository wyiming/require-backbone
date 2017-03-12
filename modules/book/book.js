//定义
define(['text!./book.html','css!./book.css'],function(html){
	//渲染方法
	function render(){
		$('.container').html(html);
	}
	
	//ajax
	function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
			async:true,
			success:function(req){
				var req = JSON.parse(req);
				console.log(req);
				function bookSth(){
					var bookStr = "";
					$.each(req.product, function(i,elem) {
						bookStr += "<figure><img src='"+elem.img+"'>";
						bookStr += "<figcation><p>"+elem.name+"</p>";
						bookStr += "<p>"+elem.specifics+"</p>";
						bookStr += "<h3>￥"+elem.price+"<img src='img/8/8_12.jpg'></h3></figcation></figure>";
					});
//					$(".book_main2").empty();
					$(".book_main2").html(bookStr);
					console.log(bookStr);
				}
				bookSth();
			}
		});
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