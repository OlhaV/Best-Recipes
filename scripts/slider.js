function Slide(section, content, elements, prev, next, buttons) {
	var s = this; 

	// --------------- properties ---------------
	
	// main slider elements 
	s.section = $(section);
	s.content = s.section.find(content);
	s.elements = s.section.find(elements);

	// supportive parameters 
	s.baseClass = s.content.attr('class').slice(17, s.content.attr('class').length - 1);
	s.currentIndex = s.content.attr('class').slice(-1);
	s.currentImg = null;
	s.prevImg = null;
	s.counter = null;

	// slider controls 
	s.prev = s.section.find(prev);
	s.next = s.section.find(next);
	s.buttons = s.section.find(buttons);
	s.currentBtn = null;


	// --------------- methods --------------- 
	s.display = function(shift){
		
		// round the counter 
		s.counter = +s.currentIndex + shift;
		if (s.counter < 1) {
			s.counter = s.elements.length;
		} else if (s.counter > s.elements.length) {
			s.counter = 1;
		}

		// redefine current and prev images 
		s.prevImg = $('.' + s.baseClass + s.currentIndex);
		s.currentIndex = s.counter;
		s.currentImg = $('.' + s.baseClass + s.currentIndex);

		// show next image and hide previous image  
		s.prevImg.css('display', 'none');
		s.currentImg.css('display', 'block');
	}


	s.buttonClick = function() {
		var shift = s.buttons.index($(event.target)) - s.buttons.index(s.currentBtn);
		s.display(shift);
	}


	s.highlightBtn = function() {
		s.currentBtn = s.buttons.eq(s.currentIndex-1);
		s.buttons.removeClass('active');
		s.currentBtn.addClass('active');
	}

	// --------------- events ---------------
	s.prev.click(function(){
		s.display(-1);
		s.highlightBtn();
	})

	s.next.click(function(){
		s.display(1);
		s.highlightBtn();
	})

	s.buttons.bind('click', function(){
		s.buttonClick();
		s.highlightBtn();
	})

}