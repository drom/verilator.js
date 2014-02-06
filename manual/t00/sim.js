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
			document.getElementById('v_'+list[i]).textContent = top[list[i]];
		}
	};
	function render_all (top) {
		render(top, ['a','v__DOT__aa','b','v__DOT__bb','c','clk']);
	};
	var i, main_time = 0, top = create(Vt00);
	top.constructor();
	// set some inputs
	// while () {
	top.clk = 0;
	render_all(top);
	document.onkeydown = function (e) {
		if(e.keyCode != 32) {return;}
		top.clk = 1;
		top.eval();
		render_all(top);
	};
	document.onkeyup = function (e) {
		if(e.keyCode != 32) {return;}
		top.clk = 0;
		top.eval();
		render_all(top);
	};
/*
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
*/
})();
