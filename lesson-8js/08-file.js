'use strict'

//1
function hideTextFunction() {
	var i = document.getElementById("text");
	if(i.style.display === 'none'){
		i.style.display = 'block';
	}else{
		i.style.display = 'none';
	}
}

//2
function hideButtonFunction() {
	document.getElementById('hideButton').style.display = 'none';
}

//3
function menuFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
	if (!event.target.matches('.dropButton')){
		var drop = document.getElementsByClassName('dropdown-content');
		for (var i = 0; i < drop.length; i++) {
			var openDrop = drop[i];
			if(openDrop.classList.contains('show')){
				openDrop.classList.remove('show');
			}
		}
	}
}



//document.getElementById('nav').onmouseover = 
//	function(event) {
//	var target = event.target;
//	if(target.className == 'main'){
//		var 
//	m = target.getElementsByClassName('sub');
//		closeMenu();
//		m[0].style.display = 'block';
//	}
//}
//
//document.onmousemove = function(event) {
//	var target = event.target;
//	console.log(event.target);
//	if(target.className != 'main' && 
//			target.className != 'sub'){
//		closeMenu();
//	}
//}
//
//function closeMenu() {
//	 var cMenu = document.getElementById('nav');
//	 var 
//	 sSub = document.getElementsByClassName('sub');
//	 for(var x=0; x< sSub.length; x++){
//		 sSub[x].style.display = "none"
//	 }
//}