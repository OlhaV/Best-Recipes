function Underline(parent, underline, width) {

	var u = this;

	u.parent = $(parent);


	u.parent.on('mouseover', function(){		
		$(this).find(underline).css({
			'width' : width,
			'transition' : 'width 1s ease'
		})
	});

	u.parent.on('mouseleave', function(){
		$(this).find(underline).css({
			'width' : '75px'
		})
	})
}