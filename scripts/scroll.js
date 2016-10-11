window.sr = ScrollReveal();

var config1 = {
	origin: 'left', 
	distance: '200px',
	duration: 1000,
}

var config2 = {
	origin: 'bottom', 
	distance: '200px',
	duration: 1000,
} 

var config3 = {
	origin: 'right', 
	distance: '200px',
	duration: 1000,
} 

var config_iphone = {
	distance: '600px',
	duration: 1000,
	viewFactor: 0.4
}

var config_article = {
	origin: 'right',
	distance: '600px', 
	duration: 1000, 
	viewFactor: 0.7,
	delay: 300
}

var config_apple = {
	origin: 'right',
	distance: '200px',
	delay: 600,
}

var config_google = {
	origin: 'right',
	distance: '200px',
	delay: 900,
}


sr.reveal('.b-columns__column_1', config1);
sr.reveal('.b-columns__column_2', config2);
sr.reveal('.b-columns__column_3', config3);
sr.reveal('.b-app__main-image', config_iphone);
sr.reveal('.b-app__main-article', config_article);
sr.reveal('.b-app__link_apple', config_apple);
sr.reveal('.b-app__link_google', config_google);