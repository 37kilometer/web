window.onload = function(){
	//实现下拉菜单
	var test = document.getElementById("test")
	var list = document.getElementById("list")
	var a1 = test.getElementsByTagName("a")[0]
	var span = test.getElementsByTagName("span")[0]
	
	//"我的关注"鼠标移入时的事件
	test.onmouseover = function(){
		this.style.border = "1px solid #e5e5e5"
		a1.style.color = "#EE3350"
		span.className = "span2"
		list.style.display = "block"
	}
	
	//"我的关注"鼠标移出时的事件
	test.onmouseout = function(){
		this.style.border = ""
		a1.style.color = ""
		span.className = ""
		list.style.display = ""
	}
	
	//实现联系客服样式
	var lx = document.getElementById("lx");
	span_lx = lx.getElementsByTagName("span")[0]
	a_lx = lx.getElementsByTagName("a")[0]
	
	lx.onmouseover = function(){
		a_lx.style.color = "#EE3350"
		span_lx.className = "span3"
	}
	
	lx.onmouseout = function(){
		a_lx.style.color = ""
		span_lx.className = ""
	}
	
	//实现轮播图效果
	
	//5000ms定时器
	var timer = window.setInterval(autoChange,5000);
	
	//获取轮播图中的圆点
	var button_li = document.getElementById("button").getElementsByTagName("li")
	
	//获取轮播图片
	var pic_div = document.getElementById("bunner_pic").getElementsByTagName("div")
	
	var current_index = 0;
	//遍历所有圆点
	for(var i = 0;i<button_li.length;i++){
		//给每个圆点设置鼠标经过事件
		button_li[i].onmouseover = function(){
			//清除定时器
			if(timer){
				clearInterval(timer);
			}
			
			//遍历所有图片
			for(var j = 0;j<pic_div.length;j++){
				if(button_li[j] == this){
					current_index = j;//保存当前显示的图片索引
					button_li[j].className = "current"
					pic_div[j].className = "current"
				} else{
					button_li[j].className = "but"
					pic_div[j].className = "pic"
				}
			}
		}
	
	
	//鼠标移出事件
	button_li[i].onmouseout = function(){
		//启动定时器
		timer = setInterval(autoChange,5000);
	}
}	
	function autoChange(){
		++current_index;
		
		if(current_index == pic_div.length){
			current_index = 0;
		}
		
		for(var i = 0;i<pic_div.length;i++){
			if(i == current_index){
				button_li[i].className = "current"
				pic_div[i].className = "current"
			} else{
				button_li[i].className = "but"
				pic_div[i].className = "pic"
			}
		}
	}
	
	//实现tab栏切换
	var message_li = document.getElementById("m_title").getElementsByTagName("li")
	var message_dl = document.getElementById("message_con").getElementsByTagName("dl")
	for(var a = 0; a < message_li.length; a++){
		message_li[a].onmousemove = function(){
			for(var b = 0; b < message_dl.length; b++){
				if(message_li[b] == this){
					message_li[b].className = "current"
					message_dl[b].className = "current"
				}else{
					message_li[b].className = ""
					message_dl[b].className = ""
				}
			}
		}
	}
	
}