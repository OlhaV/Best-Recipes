function Flip(section, parent, children) {

	var f = this; 

	f.section = $(section);
	f.parent = f.section.find(parent);

	f.parent.on('mouseover', function(){
		$(this).find(children).css({
			'transition': 'transform 1s ease', 
			'transform' : 'rotateY(-360deg)'
		});
	});

	f.parent.on('mouseleave', function(){
		$(this).find(children).css({
			'transform' : 'initial',
			'transition' : 'initial'
		});
	})
}