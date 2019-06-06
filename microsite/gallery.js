var galleryBtn = document.getElementById("galleryBtn");
var popup = document.getElementById("popup");
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
galleryBtn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
//slide gall

//image list array

var img2014 = ["'img/falcon9_small_300x240.jpg' alt='rocket'", "'img/falcon9_small_300x240.jpg' alt='rocket2'"];

function gallerSlider(){
	var i;
	var moduleB = document.getElementById("module-body");
	for(i = 0; i < img2014.length; i++){
		moduleB.innerHTML = "<div><img src=" + img2014[i] + "></div>";
	}
	
}
gallerSlider();