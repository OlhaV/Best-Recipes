function Ticker (sSelector) {
	var t = this;

	/*---------- properties ----------*/
	t.tickerSection = $('#numbers');
	t.counters = t.tickerSection.find('.counter');
	t.interval = null;
	t.text = 0;
	console.log(t.counters[0].innerHTML);

	/*---------- methods ----------*/

	t.count = function(end, shift) {
		t.interval = setInterval(function(){
			console.log('t.text = ' + t.text);
			console.log('end = ' + end);
			if(t.text+shift < end) {
				t.text += shift;
				t.counters[0].innerHTML = t.text;
			} else if (end - t.text < shift) {
				console.log(+(end - t.text));
				t.text = +t.text +(end - t.text);
				t.counters[0].innerHTML = t.text;
				clearInterval(t.interval);
			}
		});
	}

	/*---------- events ----------*/

	$('document').ready(function(){
			t.count(23567, 100);
		});

}
