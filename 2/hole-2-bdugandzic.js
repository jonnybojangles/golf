/*
 * Golf inside the following anonyms function's definition.
 * Size will be measured using http://mothereff.in/byte-counter
 * Performance will be measured by running this self-invoking function through JSPerf 
*/
(function(n, d){
	'use strict';
	var t = '';
	n.forEach(function(v){
		t = t + (Math.sqrt(v) % 1 == 0 ? 'yes':'no')+'<br><br>';
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