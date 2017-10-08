/*
* @Author: Administrator
* @Date:   2017-10-06 14:54:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-08 13:34:01
*/
window.onload = function(){
	let xiala = document.getElementsByClassName('xiala')[0];
	let nav = document.getElementsByClassName('nav')[0];
	let _li = nav.getElementsByTagName('li')[1];

	_li.onmouseover = function(){
		xiala.style.display = 'block';
	}
	_li.onmouseout = function(){
		xiala.style.display = 'none';
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
