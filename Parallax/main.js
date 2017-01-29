	var ypos,image;
	function parallex (){
	ypos = window.pageYOffset;
	image = document.getElementById('image');
	image.style.top = ypos * .4 +'px';
}
window.addEventListener('scroll',parallex);