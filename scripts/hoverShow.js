function hoverShow(mainObj, items, texts) {
	var h = this;

	h.section = $(mainObj);
	h.items = h.section.find(items);


	$(document).ready(function(){
		h.items.bind('mouseover', function(){	
			$(this).find(texts).slideDown();
		})
		h.items.bind('mouseleave', function(){
			$(this).find(texts).fadeOut();
		})
	});

}