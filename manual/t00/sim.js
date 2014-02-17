(function () {

	function create(parent) {
		var F = function() {};
		F.prototype = parent;
		return new F();
	}

	function render(top, list) {
		var i, ilen;
		ilen = list.length;
		for (i = 0; i < ilen; i++) {
			document.getElementById('v_'+list[i]).textContent = top[list[i]];
		}
	}

	function render_all (top) {
		render(top, ['a','v__DOT__aa','v__DOT__bb','c','clk']);
	}

    var stdlib = {
		Int8Array : Int8Array,
		Uint8Array : Uint8Array,
		Int16Array : Int16Array,
		Uint16Array : Uint16Array,
		Int32Array : Int32Array,
		Uint32Array : Uint32Array,
		Float32Array : Float32Array,
		Float64Array : Float64Array,
        Math : Math
    };

    var foreign = {
    };

    this.heap = new ArrayBuffer(0x200); 

    var top = Vt00(stdlib, foreign, this.heap);

	var i;
//	var main_time = 0;
//	var top = create(Vt00);
//	top.constructor();
	// set some inputs
	// while () {
//	top.clk = 0;
	top.SetState({a:1111,b:7,clk:0});
	render_all(top.GetState());
	document.onkeydown = function (e) {
		if (e.keyCode === 32) {
			top.clk(1);
			top.eval();
			render_all(top.GetState());
		}
	};
	document.onkeyup = function (e) {
		var start, end, freq, i;
		if (e.keyCode === 32) {
			top.clk(0);
			top.eval();
			render_all(top.GetState());
		} else if (e.keyCode === 13) {
			start = new Date().getTime();
			top.eval_more();
			end = new Date().getTime();
			freq = Math.round(5000/(end - start));
			console.log(freq);
			document.getElementById('console').innerHTML = freq + 'MHz';
			render_all(top.GetState());
		}
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
