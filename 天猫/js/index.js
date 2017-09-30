/*
* @Author: Administrator
* @Date:   2017-09-18 17:10:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-28 23:19:49
*/
window.onload = function(){

	var lunbo = document.getElementById("banner");
	var imgs = lunbo.getElementsByTagName('img');
	var lis = lunbo.getElementsByClassName('yuanquan');

	var c = 0; //大总管变量

		// 控制图片切换
	var timer = setInterval(run,2000);
	function run (){
		c++;
		if(c==6){
			c=0;
		}
		for(var i=0;i<6;i++){
			animate(imgs[i],{opacity:0});
			lis[i].style.background = '#dddddd';
		}
			// 让C号图片显示，c号li变红
		animate(imgs[c],{opacity:1});
		lis[c].style.background = '#A10000';
			
	}
		// 循环 给li加事件
		for(var i=0;i<lis.length;i++){
			// 给i号li加序号属性,把值存在对象的属性里
			lis[i].xuhao = i; 
			// 给i号li加鼠标移入
			lis[i].onmouseover = function(){
				// 因为移入暂停要延续这个开始，所以变量只能有一个。把this.xuhao给C
				c = this.xuhao;
				// 停止定时器
				clearInterval(timer);
				// 循环。让所有图片隐藏，让所有li变灰
				for(var i=0;i<6;i++){
					animate(imgs[i],{opacity:0});
					lis[i].style.background = '#dddddd';
				}
				animate(imgs[c],{opacity:1});
				
				lis[c].style.background = '#A10000';	
			}
			// 移入事件结束
			// 移出事件
			lis[i].onmouseout = function(){
				timer = setInterval(run,2000);
			}
			// 移出事件结束
		}
		
	let aside = document.getElementsByTagName('aside')[0];
	let liss = aside.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	for(let i=0;i<liss.length;i++){
		liss[i].onmouseover = function(){
			item[i].style.display = 'block';
			// console.log(item[i])
		}
		liss[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
	
	// 轮播按钮点击事件

	// var lunbo = document.getElementById("banner");
	// 	var imgs = lunbo.getElementsByTagName('img');
	// 	var lis = lunbo.getElementsByClassName('yuanquan');

	// 循环全隐藏方法
	// 	for(let i =0;i<lis.length;i++){
	// 		lis[i].onmouseover = function(){
	// 			for(let i=0;i<6;i++){
	// 				imgs[i].style.display = 'none';
	// 				lis[i].style.background = '#dddddd';
	// 			}
	// 		imgs[i].style.display = 'block';
	// 		lis[i].style.background = '#A10000';
	// 		}
	// }
	
	//  前一个隐藏，现在的显示
		// let now = 0;
		// for(let i =0;i<lis.length;i++){
		// 	lis[i].onclick = function(){
		// 		imgs[now].style.display = 'none';
		// 		imgs[i].style.display = 'block';
		// 		now = i;
		// 	}
		// }
		

	// 闭包函数方法
		// let now = 0;
		// for(let i =0;i<lis.length;i++){
		// 	lis[i].index = i;
		// 	lis[i].onclick = (function(i){
		// 		return function(){
		// 			imgs[now].style.display = 'none';
		// 			lis[now].style.background = '#dddddd';
		// 			imgs[this.index].style.display = 'block';
		// 			lis[this.index].style.background = '#A10000';
		// 			now = this.index;
		// 		}
		// 	})()
		// }
	let shoucang = document.getElementsByClassName('shoucangjia');
	let shoulis = document.getElementsByClassName("main-right")[0];
	let shouli = shoulis.getElementsByTagName("li")[3];
	let shouli1 = shouli.getElementsByClassName("shoucangjia");
	let shouli12 = shoulis.getElementsByTagName("li")[0];
	let shouli13 = shoulis.getElementsByTagName("li")[4];
	let shouli2 = shouli12.getElementsByClassName("diyiges");
	let erwei = shouli13.getElementsByClassName('diwuges');
	let diyiges = document.getElementsByClassName('diyigea')[0];
	let shangjia = diyiges.getElementsByClassName('shangjia');
	let lastx = document.getElementsByClassName('last')[0];
	let lastxs = lastx.getElementsByClassName('lastx');
	let youce = document.getElementsByClassName('youce')[0];
	let youce1 = youce.getElementsByClassName('youce1')[0];
	let youces1 = youce1.getElementsByClassName('youces1');
	let youce3 = document.getElementById('youce3');
	let youce3s = youce3.getElementsByTagName('li')[0];
	let youce3s1 = youce3.getElementsByTagName('li')[1];
	let youce3s13 = youce3s1.getElementsByClassName('youces4');
	let youce3s2 = youce3.getElementsByTagName('li')[2];
	let youce3s23 = youce3s2.getElementsByClassName('youces5');

	let youce3s3 = youce3.getElementsByTagName('li')[3];
	let youce3s33 = youce3s3.getElementsByClassName('youces6');
	let youce3s4 = youce3.getElementsByTagName('li')[4];
	let youce3s43 = youce3s4.getElementsByClassName('youces7');

	let youces3 = youce3s.getElementsByClassName('youces3');
	shouli.onmouseover = function(){
		shouli1[0].style.display =  "block";
	}
	shouli.onmouseout = function(){
		shouli1[0].style.display = "none";
	}
	shouli12.onmouseover = function(){
		shouli2[0].style.display =  "block";
	}
	shouli12.onmouseout = function(){
		shouli2[0].style.display = "none";
	}
	shouli13.onmouseover = function(){
		erwei[0].style.display =  "block";
	}
	shouli13.onmouseout = function(){
		erwei[0].style.display = "none";
	}
	diyiges.onmouseover = function(){
		shangjia[0].style.display =  "block";
	}
	diyiges.onmouseout = function(){
		shangjia[0].style.display = "none";
	}
	lastx.onmouseover = function(){
		lastxs[0].style.display =  "block";
	}
	lastx.onmouseout = function(){
		lastxs[0].style.display = "none";
	}
	youce1.onmouseover = function(){
		youces1[0].style.display =  "block";
	}
	youce1.onmouseout = function(){
		youces1[0].style.display = "none";
	}
	youce3s.onmouseover = function(){
		youces3[0].style.display =  "block";
	}
	youce3s.onmouseout = function(){
		youces3[0].style.display = "none";
	}
	youce3s1.onmouseover = function(){
		youce3s13[0].style.display =  "block";
	}
	youce3s1.onmouseout = function(){
		youce3s13[0].style.display = "none";
	}
	youce3s2.onmouseover = function(){
		youce3s23[0].style.display =  "block";
	}
	youce3s2.onmouseout = function(){
		youce3s23[0].style.display = "none";
	}
	youce3s3.onmouseover = function(){
		youce3s33[0].style.display =  "block";
	}
	youce3s3.onmouseout = function(){
		youce3s33[0].style.display = "none";
	}
	youce3s4.onmouseover = function(){
		youce3s43[0].style.display =  "block";
	}
	youce3s4.onmouseout = function(){
		youce3s43[0].style.display = "none";
	}


// 		搜索框
	let floor = document.querySelectorAll('.floor');
	let search = document.querySelector('.search');
	let asides = document.querySelector('.asidex')
	let asidex  = document.querySelectorAll('.asidex > li');
	let floorArr = [];
	let flag = true;
	let ch = innerHeight;
	let color = ['orange','red','green','purple','skyblue','blue','pink','orange','red','green'];
	let flag1 = true;
	floor.forEach(element=>{
		floorArr.push(element.offsetTop);
	})
	asidex.forEach((element,index)=>{
		element.onclick =function(){
			for(let i=0;i<asidex.length;i++){
				asidex[i].style.background = '#FFF';
			}
			element.style.background = color[index];
			flag = false;
			// document.body.scrollTop = floorArr[index];
			animate(document.body,{scrollTop:floorArr[index]},function(){
				flag = true;
			});
		}
	})
	window.onscroll = function(){
		if(!flag){
			return;
		}
			// 判断距离，使搜索框出现和消失
		let scrolltop1 = document.body.scrollTop;
		if(scrolltop1>=500){
			if(flag1){
				flag1 = !flag1;
				animate(search,{top:0});
			}
		}else{
			if(!flag1){
				flag1 = !flag1;
				animate(search,{top:-50});
			}
		}
		let scrollTop = document.body.scrollTop;
		floorArr.forEach((elements,index)=>{ 
			// 判断顶部距离
			if(scrollTop + ch >= elements+200){
				// 让左侧li颜色全部变白，再让对应个变色
				for(let i=0;i<asidex.length;i++){
					asidex[i].style.background = '#fff'; 
				}
				 asidex[index].style.background = color[index];
	     	}
		})
	}
}
