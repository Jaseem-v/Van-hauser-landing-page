// next-prev button

var slide_img = document.getElementById("slide-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var images = new Array (
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg"
    );
let i=0;

next.onclick = function(){
    if(i<3){
        slide_img.src = images[i+1];
        i++;
    }
};

prev.onclick = function(){
    if(i>0){
        slide_img.src = images[i-1];
        i--;
    }
};

// x   next-prev button


