//定义
define(['text!./supermarket.html','css!./supermarket.css','md5'],function(html){
	//渲染方法
	function render(){
		$('.container').html(html);
	}
	
	//ajax
	function getData(name){
		var name = name || '热销榜';
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category="+name,
			async:true,
			success:function(req) {
				var req = JSON.parse(req);
				console.log(req);
				function supHot(){
					var supStr = "";
					$.each(req.data, function(i,elem) {
						console.log(typeof elem);
						id = hex_md5(elem.name).substr(0,5);
						supStr += "<figure id='"+id+"'><img src='"+elem.img+"'>";
						supStr += "<figcation><h2>"+elem.name+"</h2>";
						supStr += "<p class='bor'><span>精选</span><a>"+elem.pm_desc+"</a></p>";
						supStr += "<p class='gramm'>"+elem.specifics+"</p>";
						supStr += "<p class='price'>￥"+elem.price+"<span>￥"+elem.market_price+"</span></p>";
						supStr += "<img src='img/3/yuding (5).jpg' class='sm_jian'><span class='sm_num'>0</span><img src='img/1/shouye (3).jpg' class='sm_add'><script type='text/html'>"+JSON.stringify(elem)+"</script></figcation></figure>"
					});
					//$(".mains_1_right_down").empty();
					$(".mains_1_right_down").html(supStr);
				}
				supHot();


				console.log($('figure'));
				$.each($('figure'),function(i,elem) {
					$(elem).on('click','figcation .sm_add',function(){
						$('.num').css('display','inline-block');
						var id = $(this).parent().parent().attr("id");
						var data = $(this).next().html();
						var value = localStorage.getItem(id);
						$(this).prev().prev().css("display","inline-block");
						$(this).prev().css("display","inline-block");
						if(!value){
							var num = 1;
							localStorage.setItem(id,JSON.stringify({
								data:data,
								num:num
							}))
							console.log(num);
							$(".num").html(num);
							$(this).prev().html(num);
							console.log($(this));
						}else{
							//console.log(value);
							var num = JSON.parse(value).num;
							num++;
							localStorage.setItem(id,JSON.stringify({
								data:data,
								num:num
							}))
							console.log(num);
							$(".num").html(num);
							$(this).prev().html(num);
							console.log($(this).prev());
						}

					})

					$(elem).on('click','figcation .sm_jian',function(){
						//console.log($(this).next().html());
						var id = $(this).parent().parent().attr("id");
						var data = $(this).next().html();
						var value = localStorage.getItem(id);
						var num = JSON.parse(value).num;
						num--;
						if(num <= 0){
							num=0;
							$(this).css("display","none");
							$(this).next().css("display","none");
							localStorage.setItem(id,JSON.stringify({
								data:data,
								num:num
							}))
							$(this).next().html(num);
						}else{
							localStorage.setItem(id,JSON.stringify({
								data:data,
								num:num
							}))
						}
						console.log(num);
						$(this).next().html(num);
						$(".num").html(num);
					})
				});
			}
		})
	}

	function bindEvent(){
		$('#hot').click(function(){
			console.log($(this).html());
			getData($(this).html());
		})
		$('#s_day').click(function(){
			getData('天天特价');
		})
		$('#s_fruit').click(function(){
			console.log($(this).html());
			getData($(this).html());
		})
		$('#s_milk').click(function(){
			console.log($(this).html());
			getData($(this).html());
		})
		console.log($('figure'));
		
	}

	return{
		render:render,
		getData:getData,
		bindEvent:bindEvent
	}
})