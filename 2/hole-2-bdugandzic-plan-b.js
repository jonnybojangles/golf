/*
 * Golf inside the following anonyms function's definition.
 * Size will be measured using http://mothereff.in/byte-counter
 * Performance will be measured by running this self-invoking function through JSPerf 
*/
(function(n, d){
	'use strict';
	var t = '';
	n.forEach(function(v){
		for (var i = v; i > 0; i--) {
			if (v / i % 1 == 0)
				var b = !b;
		}
		t = t + ((!!b?'yes':'no') + '<br><br>');
	});
	d.write(t);
})([
	1,
	2,
	8250,
	3910,
	1930,
	256,
	1321,
	8447,
	1969,
	6444,
	4926,
	3845
], document);