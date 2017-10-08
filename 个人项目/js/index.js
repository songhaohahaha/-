/*
* @Author: Administrator
* @Date:   2017-09-30 20:26:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-08 13:25:04
*/
window.onload = function(){
	let bannerd = document.getElementsByClassName('dabanner')[0];
	let banner = bannerd.getElementsByClassName('banner')[0];
	let imgs = banner.getElementsByTagName('img');
	let jian_left = document.querySelector('.jiantou-left');
	let jian_right = document.querySelector('.jiantou-right');
	let c=0;
	let flag = true;
	jian_left.onclick = function(){
		if(!flag){
			return ;
		}
		runL();
		flag = false;
	}
	jian_right.onclick = function(){
		if(!flag){
			return ;
		}
		run();
		flag = false;
	}
	timer = setInterval(run,3000)
	
	function run(){
		c++;
		if(c==2){
			c=0;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
		}
		imgs[c].style.opacity = 1;
		flag=true;
	}
	function runL(){
		c--;
		if(c<0){
			c=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
		}
		imgs[c].style.opacity = 1;
	}

	let xiala = document.getElementsByClassName('xiala')[0];
	let nav = document.getElementsByClassName('nav')[0];
	let _li = nav.getElementsByTagName('li')[1];

	_li.onmouseover = function(){
		xiala.style.display = 'block';
	}
	_li.onmouseout = function(){
		xiala.style.display = 'none';
	}
	let pinpai = document.getElementsByClassName('pinpai')[0];
	let pinpais1 = pinpai.getElementsByClassName('diyi')[0];
	let pinpais2 = pinpai.getElementsByClassName('diyi')[1];
	let pinpais3= pinpai.getElementsByClassName('diyi')[2];
	let pinpais4= pinpai.getElementsByClassName('diyi')[3];
	let pinpais5 = pinpai.getElementsByClassName('diyi')[4];
	let img1 = pinpais1.getElementsByTagName('img');
	let img2 = pinpais2.getElementsByTagName('img');
	let img3 = pinpais3.getElementsByTagName('img');
	let img4 = pinpais4.getElementsByTagName('img');
	let img5 = pinpais5.getElementsByTagName('img');

	pinpais1.onmouseover = function(){
		img1[0].style.opacity = 0;
		img1[1].style.opacity = 1;
	}
	pinpais1.onmouseout = function(){
		img1[0].style.opacity = 1;
		img1[1].style.opacity = 0;
	}
	pinpais2.onmouseover = function(){
		img2[0].style.opacity = 0;
		img2[1].style.opacity = 1;
	}
	pinpais2.onmouseout = function(){
		img2[0].style.opacity = 1;
		img2[1].style.opacity = 0;
	}
	pinpais3.onmouseover = function(){
		img3[0].style.opacity = 0;
		img3[1].style.opacity = 1;
	}
	pinpais3.onmouseout = function(){
		img3[0].style.opacity = 1;
		img3[1].style.opacity = 0;
	}
	pinpais4.onmouseover = function(){
		img4[0].style.opacity = 0;
		img4[1].style.opacity = 1;
	}
	pinpais4.onmouseout = function(){
		img4[0].style.opacity = 1;
		img4[1].style.opacity = 0;
	}
	pinpais5.onmouseover = function(){
		img5[0].style.opacity = 0;
		img5[1].style.opacity = 1;
	}
	pinpais5.onmouseout = function(){
		img5[0].style.opacity = 1;
		img5[1].style.opacity = 0;
	}
	let anlibottom = document.getElementsByClassName('anlibottom')[0];
	let anlis1 = anlibottom.getElementsByClassName('anlidiyi')[0];
	let anlis2 = anlibottom.getElementsByClassName('anlidiyi')[1];
	let anlis3= anlibottom.getElementsByClassName('anlidiyi')[2];
	let anlis4= anlibottom.getElementsByClassName('anlidiyi')[3];
	let anlis5 = anlibottom.getElementsByClassName('anlidiyi')[4];
	let imgs1 = anlis1.getElementsByTagName('img');
	let imgs2 = anlis2.getElementsByTagName('img');
	let imgs3 = anlis3.getElementsByTagName('img');
	let imgs4 = anlis4.getElementsByTagName('img');
	let imgs5 = anlis5.getElementsByTagName('img');

	anlis1.onmouseover = function(){
		imgs1[0].style.opacity = 0;
		imgs1[1].style.opacity = 1;
	}
	anlis1.onmouseout = function(){
		imgs1[0].style.opacity = 1;
		imgs1[1].style.opacity = 0;
	}
	anlis2.onmouseover = function(){
		imgs2[0].style.opacity = 0;
		imgs2[1].style.opacity = 1;
	}
	anlis2.onmouseout = function(){
		imgs2[0].style.opacity = 1;
		imgs2[1].style.opacity = 0;
	}
	anlis3.onmouseover = function(){
		imgs3[0].style.opacity = 0;
		imgs3[1].style.opacity = 1;
	}
	anlis3.onmouseout = function(){
		imgs3[0].style.opacity = 1;
		imgs3[1].style.opacity = 0;
	}
	anlis4.onmouseover = function(){
		imgs4[0].style.opacity = 0;
		imgs4[1].style.opacity = 1;
	}
	anlis4.onmouseout = function(){
		imgs4[0].style.opacity = 1;
		imgs4[1].style.opacity = 0;
	}
	anlis5.onmouseover = function(){
		imgs5[0].style.opacity = 0;
		imgs5[1].style.opacity = 1;
	}
	anlis5.onmouseout = function(){
		imgs5[0].style.opacity = 1;
		imgs5[1].style.opacity = 0;
	}


	let kefu = document.querySelector('.kefu');
	let kefu1 = document.querySelector('.kefu>.kefu1');
	let kefu2 = document.querySelector('.kefu>.kefu2');

	kefu.onmouseover = function(){
		kefu1.style.opacity = 0;
		kefu2.style.opacity = 1;
	}
	kefu.onmouseout = function(){
		kefu1.style.opacity = 1;
		kefu2.style.opacity = 0;
	}
}