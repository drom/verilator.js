(function () {
	function create(parent) {
		var F = function() {};
		F.prototype = parent;
		return new F();
	};
	function render(top, list) {
		var i, ilen;
		ilen = list.length;
		for (i = 0; i < ilen; i++) {
			console.log('v_'+list[i]);
			document.getElementById('v_'+list[i]).innerHTML = top[list[i]];
		}
	};

	var i, main_time = 0, top = create(Vt00);
	top.constructor();
	// set some inputs
	// while () {
	render(top, ['a','v__DOT__aa','b','v__DOT__bb','c']);
	for (i = 0; i < 100; i++) {
		if ((main_time % 4) == 1) {
			top.clk = 1; // Toggle clock
		}
		if ((main_time % 4) == 3) {
			top.clk = 0;
		}
		top.eval();
		console.log(top);
		main_time++;
	}
})();
