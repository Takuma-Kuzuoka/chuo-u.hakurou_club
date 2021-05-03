 'use strict';

 var slides = document.getElementsByClassName('slides')[0].getElementsByTagName('li');

viewSlide(2000);

function viewSlide(msec, slide_no = -1)
{
	if (slides[slide_no]) {
		slides[slide_no].style.display = 'none';
	}

	slide_no++;
	if (slides[slide_no]) {

		slides[slide_no].style.display = 'block';
	} else {
		
		slides[0].style.display = 'block';
		slide_no = 0;
	}
	setTimeout(function(){viewSlide(msec, slide_no);}, msec);
}
