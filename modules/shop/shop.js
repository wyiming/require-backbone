//定义
define(['text!./shop.html','css!./shop.css'],function(html){
	//渲染方法
	function render(){
		$('.container').html(html);
		$('.num').html(localStorage.getItem('num'));
	}
	
	//ajax
	function getData(){
		var ele =JSON.parse(localStorage.getItem('good'));
		console.log(ele);
		var str = "<div class='shop_sth'>\
			<img src='img/3/yuding (4).jpg'>\
			<figure>\
				<img src='"+ele.img+"'>\
				<figcation>\
					<p>"+ele.name+"</p>\
					<p>￥<span>"+ele.price+"</span></p>\
				</figcation>\
			</figure>\
			<div class='numShop' id='numShop'>\
				<img src='img/3/yuding (5).jpg'> \
				<span>1</span>\
				<img src='img/1/shouye (3).jpg'>\
			</div>\
		</div>";
		$('.shop_num').html(str);
	}
	
	function bindEvent(){
		var opus = document.querySelector(".shop_num");
		 var oSub = document.querySelector("#numShop img:nth-of-type(1)");
		var oAdd = document.querySelector("#numShop img:last-of-type");
		var oSpan = document.querySelector("#numShop span");
		var price = document.querySelector(".shop_sth>figure>figcation p:last-of-type span");
		var aMon = document.querySelector(".shop_all>p a");
		var oAll = document.querySelector(".shop_all>img");
		var oImg2 = document.querySelector(".shop_sth>img");
		var oCh = document.querySelector(".shop_all>div");
		var a = oSpan.innerHTML;
		$(oAdd).click(function(){
			a++;
			oSpan.innerHTML = a;
			aMon.innerHTML = parseInt((parseFloat(price.innerHTML)*a)*100)/100;
		})
		$(oSub).click(function(){
			a--;
			if(a<=0){
				opus.style.display="none";
			}
			oSpan.innerHTML = a;
			aMon.innerHTML = parseInt((parseFloat(price.innerHTML)*a)*100)/100;
		})
		oAll.onclick = function(){
			if($(oAll).attr("src")=="img/3/yuding (4).jpg"){
				$(oAll).attr("src","img/3/select.png");
				$(oCh).css("background","gray");
				$(oCh).html("满￥0起送");
				$(aMon).html("0");

			}else{
				$(oAll).attr("src","img/3/yuding (4).jpg");
				$(oCh).css("background","#ffd600");
				$(oCh).html("选好了");

				//$(aMon).html((parseInt((parseFloat($(price).html())*a)*100)/100).html());
			}

		}


	}
	return{
		render:render,
//		bindEvent:bindEvent,
		getData:getData
	}
})