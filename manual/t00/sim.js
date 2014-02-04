(function (document, window) {
	function create(parent) {
		var F = function() {};
		F.prototype = parent;
		return new F();
	};

	var i, main_time = 0, top = create(Vt00);
	top.constructor();
	// set some inputs
	// while () {
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
})(document, window);