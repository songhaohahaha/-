/*
* @Author: Administrator
* @Date:   2017-09-19 17:53:52
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-28 22:09:02
*/


//	 移动滑动轮播图实现
//   next 位置  imgW 0 
//   动画  0.0→ -imgW 0
//   next imgW 0 → 0 0
//   now = next

window.onload = function(){
	let ul = document.getElementsByClassName('banner')[0];
	// let lis = ul.getElementsByTagName('li')[0];
	let imgs = ul.getElementsByTagName('img');
	let btns = document.getElementsByClassName('btn')[0];
	let btn  = btns.getElementsByTagName('li');
	let left = document.getElementsByClassName('jiantou-left')[0];
	let right = document.getElementsByClassName('jiantou-right')[0];
	let banda = document.getElementsByClassName('bannerda')[0];
	let youa = document.getElementsByClassName('youa')[0];
	let zuoa1 = document.getElementsByClassName('zuoa')[1];
	let youa1 = document.getElementsByClassName('youa')[1];
	let zuoa = document.getElementsByClassName('zuoa')[0];
	let imgw = parseInt(getComputedStyle(ul,null).width);
	let mingxing = document.getElementsByClassName('mingxing1');
	let mingxing2 = document.getElementsByClassName('mingxing2');
	let mingxingw = parseInt(getComputedStyle(mingxing[0],null).width);
	let mingxingw2 = parseInt(getComputedStyle(mingxing2[0],null).width);
	let now = 0;
	let next = 0;
	let flag = true;
	let t ;
	// let t;
	// let num = 0;
	// t = setInterval(move, 2000);
	// function move(){
	// 	num++;
	// 	if(num == imgs.length){
	// 		num = 0;
	// 	}
	// 	for(let i =0;i<imgs.length;i++){
	// 		animate(imgs[i],{opacity:0});
	// 		btn[i].style.background = '#1C1C20';
	// 	}
	// 	animate(imgs[num],{opacity:1});
	// 	btn[num].style.background = '#7c7c81';
	// }
	// function moveL(){
	// 	num--;
	// 	if(num < 0){
	// 		num = imgs.length-1;
	// 	}
	// 	for(let i =0;i<imgs.length;i++){
	// 		animate(imgs[i],{opacity:0});
	// 		btn[i].style.background = '#1C1C20';
	// 	}
	// 	animate(imgs[num],{opacity:1});
	// 	btn[num].style.background = '#7c7c81';
	// }
	// for(let i =0;i<btn.length;i++){
	// 	btn[i].onmouseover = function(){
	// 		// 停止定时器
	// 		clearInterval(t);
	// 		// 循环。让所有图片隐藏，让所有li变灰
	// 		for(let i=0;i<6;i++){
	// 			animate(imgs[i],{opacity:0});
	// 			btn[i].style.background = '#1C1C20';
	// 		}
	// 		animate(imgs[i],{opacity:1});
	// 		btn[i].style.background = '#7c7c81';
	// 		num = i;
	// 	}
	// 	btn[i].onmouseout = function(){
	// 		t = setInterval(move, 2000);
	// 	}
	// }
	// right.onclick=function(){
	// 	move();
	// }
	// left.onclick = function(){
	// 	moveL();
	// }
	t = setInterval(move, 2000);
	// 抓取ul的宽度，把它转化为整数方便下面比较。

	// 给banner大盒子加鼠标移入事件，移入清除定时器;
	left.onmouseover = function(){
		clearInterval(t);
	}
	left.onmouseout = function(){
		t = setInterval(move, 2000);
	}
	right.onmouseover = function(){
		clearInterval(t);
	}
	right.onmouseout = function(){
		t = setInterval(move, 2000);
	}
	// 定时器中的移动函数
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		imgs[next].style.left = `${imgw}px`;
		// 让现在显示的照片移走，让接下来的图片移进来
		animate(imgs[now],{left:-imgw});
		animate(imgs[next],{left:0},function(){
			flag = true;
		});
		btn[now].style.background = '#1C1C20';
		btn[next].style.background = '#7c7c81';
		now = next;
	}
	// 向左移动的函数
	function moveL(){
		next--;
		if(next < 0 ){
			next = imgs.length-1; 
		}
		// 让现在显示的照片移走，让点击的图片移进来
		imgs[next].style.left = `${-imgw}px`
		animate(imgs[now],{left:imgw});
		animate(imgs[next],{left:0},function(){
			flag = true;
		});
		btn[now].style.background = '#1C1C20';
		btn[next].style.background = '#7c7c81';
		now = next;
	}
	// 给左箭头加单击事件
	left.onclick = function(){
		if(!flag){
			return ;
		}
		moveL();
		flag = false;
	}
	// 给右箭头加单击事件
	right.onclick = function(){
		if(!flag){
			return ;
		}
		move();
		flag = false;
	}
	// 给按钮加单击事件 单击的第i个，让第i个显示，推过来，now个推走。
	for(let i=0;i<btn.length;i++){
		btn[i].onclick = function(){
			if(now == i){
				return;
			}
			btn[now].style.background = '#1C1C20';
			btn[i].style.background = '#7c7c81';
			imgs[i].style.left = `${imgw}px`;
			animate(imgs[now],{left:-imgw});
			animate(imgs[i],{left:0});
			now = next = i;
		}
	}
	// 明星单品的右箭头;
	youa.onclick = function(){
		animate(mingxing[0],{left:mingxingw});
		animate(mingxing[1],{left:0});
	}
	// 明星单品的左箭头;
	zuoa.onclick = function(){
		animate(mingxing[1],{left:-mingxingw});
		animate(mingxing[0],{left:0});
	}
	// 为你推荐的左右箭头
	youa1.onclick = function(){
		animate(mingxing2[0],{left:mingxingw2});
		animate(mingxing2[1],{left:0});
	}
	zuoa1.onclick = function(){
		animate(mingxing2[1],{left:-mingxingw2});
		animate(mingxing2[0],{left:0});
	}
	// 家电
	let jiadian = document.getElementsByClassName('jiadian')[0];
	let jiadians = jiadian.getElementsByClassName('jiadian2s');
	let jiabiaoqian = document.getElementsByClassName('jiadian1-right')[0];
	let jiabqs = jiabiaoqian.getElementsByTagName('a');
	for(let i =0;i<jiabqs.length;i++){
		jiabqs[i].onmouseover = function(){
			for(let i=0;i<jiadians.length;i++){
				jiadians[i].style.display = 'none';
			}
			jiadians[i].style.display = 'block';
		} 
	}
	// 智能
	let jiadian1 = document.getElementsByClassName('jiadian')[0];
	let jiadians1 = jiadian1.getElementsByClassName('jiadian2s1');
	let jiabiaoqian1 = document.getElementsByClassName('jiadian1-right1')[0];
	let jiabqs1 = jiabiaoqian1.getElementsByTagName('a');
	for(let i =0;i<jiabqs1.length;i++){
		jiabqs1[i].onmouseover = function(){
			for(let i=0;i<jiadians1.length;i++){
				jiadians1[i].style.display = 'none';
			}
			jiadians1[i].style.display = 'block';
		} 
	}
	// 导航栏下拉
	let menu = document.getElementsByClassName('menu')[0];
	let nav = document.getElementsByTagName('nav')[0];
	let navs= nav.getElementsByClassName('daohang')[0];
	let navlis = navs.getElementsByTagName('li');
	let phone = menu.getElementsByClassName('xiaomiphone');

	for(let i=0;i<navlis.length;i++){
		navlis[i].onmouseover = function(){
			phone[i].style.display = 'block';
			phone[i].style.height = '234px';
		}
		navlis[i].onmouseout = function(){
			phone[i].style.height = 0;
			phone[i].style.display = 'none';
		}
	}
	// 购物车
	let gouwuche = document.getElementsByClassName('gouwuche')[0];
	let gouwuchexia = gouwuche.getElementsByClassName('gouwuchexia')[0];
	let gouload = gouwuchexia.getElementsByClassName('loading')[0];

	gouwuche.onmouseover = function(){
		gouwuchexia.style.display = 'block';
	}
	gouwuche.onmouseout = function(){
		gouwuchexia.style.display = 'none';
	}
	// aside
	let aside = document.getElementsByTagName('aside')[0];
	let zuobian = aside.getElementsByClassName('zuobian')[0];
	let zuobians = zuobian.getElementsByTagName('li');
	let ces = zuobian.getElementsByClassName('ce');

	for(let i=0;i<zuobians.length;i++){
		zuobians[i].onmouseover = function(){
			ces[i].style.display = 'block';
		}
		zuobians[i].onmouseout = function(){
			ces[i].style.display = 'none';
		}
	}
	// 内容，图书轮播
	let neirongda = document.getElementsByClassName('neirong-bottom')[0];
	let neirongs = neirongda.getElementsByClassName('neirong1')[0];
	let neirongs1 = neirongda.getElementsByClassName('neirong2')[0];
	let neirongs2 = neirongda.getElementsByClassName('neirong3')[0];
	let neirongs3 = neirongda.getElementsByClassName('neironglast')[0];
	let haLi = neirongs.getElementsByClassName('haLi1');
	let haLi1 = neirongs1.getElementsByClassName('haLi1');
	let haLi2 = neirongs2.getElementsByClassName('haLi1');
	let haLi3 = neirongs3.getElementsByClassName('haLi1');
	let xiaYuan = neirongs.getElementsByClassName('xiayuanquan')[0];
	let xiaYuans = xiaYuan.getElementsByTagName('div');
	let xiaYuan1 = neirongs1.getElementsByClassName('xiayuanquan')[0];
	let xiaYuans1 = xiaYuan1.getElementsByTagName('div');
	let zuoJian = neirongs.getElementsByClassName('jiantou')[0];
	let youJian = neirongs.getElementsByClassName('youjiantou')[0];
	let zuoJian1 = neirongs1.getElementsByClassName('jiantou')[0];
	let youJian1 = neirongs1.getElementsByClassName('youjiantou')[0];
	let xiaYuan2 = neirongs2.getElementsByClassName('xiayuanquan')[0];
	let xiaYuans2 = xiaYuan2.getElementsByTagName('div');
	let zuoJian2 = neirongs2.getElementsByClassName('jiantou')[0];
	let youJian2 = neirongs2.getElementsByClassName('youjiantou')[0];
	let zuoJian3 = neirongs3.getElementsByClassName('jiantou')[0];
	let youJian3 = neirongs3.getElementsByClassName('youjiantou')[0];
	let xiaYuan3 = neirongs3.getElementsByClassName('xiayuanquan')[0];
	let xiaYuans3 = xiaYuan3.getElementsByTagName('div');
	let Dang = 0;
	for(let i = 0;i<xiaYuans.length;i++){
		xiaYuans[i].onmouseover = function(){
			for(let i = 0;i<haLi.length;i++){
				haLi[i].style.opacity = 0;
				xiaYuans[i].style.background = '#B0B0B0';
			}
			haLi[i].style.opacity = 1;
			xiaYuans[i].style.background = '#FF6F0F';
			Dang = i;
		}
	}
	zuoJian.onclick = function(){
		if(Dang > 0){
			for(let i = 0;i<haLi.length;i++){
				haLi[i].style.opacity = 0;
				xiaYuans[i].style.background = '#B0B0B0';
			}
			Dang1 = Dang - 1;
			haLi[Dang1].style.opacity = 1;
			xiaYuans[Dang1].style.background = '#FF6F0F';
			Dang = Dang1;
		}
	}
	youJian.onclick = function(){
		if(Dang < 2){
			for(let i = 0;i<haLi.length;i++){
				haLi[i].style.opacity = 0;
				xiaYuans[i].style.background = '#B0B0B0';
			}
			Dang1 = Dang +1;
			haLi[Dang1].style.opacity = 1;
			xiaYuans[Dang1].style.background = '#FF6F0F';
			Dang = Dang1;
		}
	}
	let Dangs = 0;
	for(let i = 0;i<xiaYuans1.length;i++){
		xiaYuans1[i].onmouseover = function(){
			for(let i = 0;i<haLi1.length;i++){
				haLi1[i].style.opacity = 0;
				xiaYuans1[i].style.background = '#B0B0B0';
			}
			haLi1[i].style.opacity = 1;
			xiaYuans1[i].style.background = '#FF6F0F';
			Dangs = i;
		}
	}
	zuoJian1.onclick = function(){
		if(Dangs > 0){
			for(let i = 0;i<haLi1.length;i++){
				haLi1[i].style.opacity = 0;
				xiaYuans1[i].style.background = '#B0B0B0';
			}
			Dangs1 = Dangs - 1;
			haLi1[Dangs1].style.opacity = 1;
			xiaYuans1[Dangs1].style.background = '#FF6F0F';
			Dangs = Dangs1;
		}
	}
	youJian1.onclick = function(){
		if(Dangs < 2){
			for(let i = 0;i<haLi1.length;i++){
				haLi1[i].style.opacity = 0;
				xiaYuans1[i].style.background = '#B0B0B0';
			}
			Dangs1 = Dangs +1;
			haLi1[Dangs1].style.opacity = 1;
			xiaYuans1[Dangs1].style.background = '#FF6F0F';
			Dangs = Dangs1;
		}
	}	
	let Dangss = 0;
	for(let i = 0;i<xiaYuans2.length;i++){
		xiaYuans2[i].onmouseover = function(){
			for(let i = 0;i<haLi2.length;i++){
				haLi2[i].style.opacity =0;
				xiaYuans2[i].style.background = '#B0B0B0';
			}
			haLi2[i].style.opacity = 1;
			xiaYuans2[i].style.background = '#FF6F0F';
			Dangss = i;
		}
	}
	zuoJian2.onclick = function(){
		if(Dangss > 0){
			for(let i = 0;i<haLi2.length;i++){
				haLi2[i].style.opacity = 0;
				xiaYuans2[i].style.background = '#B0B0B0';
			}
			Dangss1 = Dangss - 1;
			haLi2[Dangss1].style.opacity = 1;
			xiaYuans2[Dangss1].style.background = '#FF6F0F';
			Dangss = Dangss1;
		}
	}
	youJian2.onclick = function(){
		if(Dangss < 2){
			for(let i = 0;i<haLi2.length;i++){
				haLi2[i].style.opacity = 0;
				xiaYuans2[i].style.background = '#B0B0B0';
			}
			Dangss1 = Dangss +1;
			haLi2[Dangss1].style.opacity = 1;
			xiaYuans2[Dangss1].style.background = '#FF6F0F';
			Dangss = Dangss1;
		}
	}
	let Dangsss = 0;
	for(let i = 0;i<xiaYuans3.length;i++){
		xiaYuans3[i].onmouseover = function(){
			for(let i = 0;i<haLi3.length;i++){
				haLi3[i].style.opacity = 0;
				xiaYuans3[i].style.background = '#B0B0B0';
			}
			haLi3[i].style.opacity = 1;
			xiaYuans3[i].style.background = '#FF6F0F';
			Dangsss = i;
		}
	}
	zuoJian3.onclick = function(){
		if(Dangsss > 0){
			for(let i = 0;i<haLi3.length;i++){
				haLi3[i].style.opacity = 0;
				xiaYuans3[i].style.background = '#B0B0B0';
			}
			Dangsss1 = Dangsss - 1;
			haLi3[Dangsss1].style.opacity = 1;
			xiaYuans3[Dangsss1].style.background = '#FF6F0F';
			Dangsss = Dangsss1;
		}
	}
	youJian3.onclick = function(){
		if(Dangsss < 2){
			for(let i = 0;i<haLi3.length;i++){
				haLi3[i].style.opacity= 0;
				xiaYuans3[i].style.background = '#B0B0B0';
			}
			Dangsss1 = Dangsss +1;
			haLi3[Dangsss1].style.opacity = 1;
			xiaYuans3[Dangsss1].style.background = '#FF6F0F';
			Dangsss = Dangsss1;
		}
	}		
}

