'use strict';

var img = new Array("images/huyuga.jpg",
                    "images/slideshow1.jpg",
                    "images/slideshow2.jpg",
                    "images/slideshow3.jpg",
                    "images/slideshow4.jpg",
                     );
var element = document.getElementById("slideshow");
var count = -1;
imgTimer();


function imgTimer() {
  count++;
  if (count == img.length) count = 0;
  element.src = img[count];
  setTimeout("imgTimer()",4500);
}
