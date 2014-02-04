var Vt00 = {
	// CELLS
	// Public to allow access to /*verilator_public*/ items;
	// otherwise the application code can consider these internals.

	// PORTS
	// The application code writes and reads these signals to
	// propagate new values into/out from the Verilated model.
	clk : verilated.VL_IN8 (0,0),
	c : verilated.VL_OUT8 (4,0),
	a : verilated.VL_IN8 (4,0),
	b : verilated.VL_IN8 (4,0),

	// LOCAL SIGNALS
	// Internals; generally not touched by application code
	v__DOT__aa : verilated.VL_SIG8(4,0),
	v__DOT__bb : verilated.VL_SIG8(4,0),
	//char	__VpadToAlign10[2];

	// LOCAL VARIABLES
	// Internals; generally not touched by application code
	__Vclklast__TOP__clk : verilated.VL_SIG8(0,0),
	//char	__VpadToAlign17[3];

	// INTERNAL VARIABLES
	// Internals; generally not touched by application code
	__VlSymsp : {}		// Symbol table

	// PARAMETERS
	// Parameters marked /*verilator public*/ for use by application code

	// CONSTRUCTORS
	// Vt00& operator= (const Vt00&);	///< Copying not allowed
	// Vt00(const Vt00&);	///< Copying not allowed
	// public:
	/// Construct the model; called by application code
	/// The special name  may be used to make a wrapper with a
	/// single model invisible WRT DPI scope names.
	//Vt00(const char* name="TOP");
	/// Destroy the model; called (often implicitly) by application code
	//~Vt00();

	// USER METHODS

	// API METHODS
	/// Evaluate the model.  Application must call when inputs change.
	// eval();
	/// Simulation complete, run final blocks.  Application must call on completion.
	//void final();

	// INTERNAL METHODS
	//private:
	//static void _eval_initial_loop(Vt00__Syms* __restrict vlSymsp);
	//public:
	//void __Vconfigure(Vt00__Syms* symsp, bool first);
	//private:
	//static IData	_change_request(Vt00__Syms* __restrict vlSymsp);
	//public:
	//static void	_eval(Vt00__Syms* __restrict vlSymsp);
	//static void	_eval_initial(Vt00__Syms* __restrict vlSymsp);
	//static void	_eval_settle(Vt00__Syms* __restrict vlSymsp);
	//static void	_sequent__TOP__1(Vt00__Syms* __restrict vlSymsp);
};

Vt00.constructor = function () {
	'use strict'
	var vlSymsp = {}, vlTOPp = vlSymsp.TOPp;
	// Reset internal values

	// Reset structure values
	this.c = verilated.VL_RAND_RESET_I(5);
	this.a = verilated.VL_RAND_RESET_I(5);
	this.b = verilated.VL_RAND_RESET_I(5);
	this.clk = verilated.VL_RAND_RESET_I(1);
	this.v__DOT__aa = verilated.VL_RAND_RESET_I(5);
	this.v__DOT__bb = verilated.VL_RAND_RESET_I(5);
	this.__Vclklast__TOP__clk = verilated.VL_RAND_RESET_I(1);
};

Vt00._eval_initial_loop = function (vlSymsp) {
	return "Hello!";
};

Vt00.__Vconfigure = function (symsp, first) {};

Vt00._change_request = function (vlSymsp) {};

Vt00._eval_initial = function (vlSymsp) {};

Vt00._eval_settle = function (vlSymsp) {};

Vt00._sequent__TOP__1 = function (vlSymsp) {
	//Vt00* __restrict vlTOPp VL_ATTR_UNUSED = vlSymsp->TOPp;
	var vlTOPp = this;
	/*VL_DEBUG_IF(VL_PRINTF*/
	console.log("    Vt00._sequent__TOP__1");
	// Body
	// ALWAYS at t00.sv:26
	vlTOPp.c = (0x1f & (vlTOPp.v__DOT__aa) 
			 + (vlTOPp.v__DOT__bb))|0;
	// ALWAYS at t00.sv:24
	vlTOPp.v__DOT__aa = vlTOPp.a|0;
	// ALWAYS at t00.sv:25
	vlTOPp.v__DOT__bb = vlTOPp.b|0;
};

Vt00._eval = function (vlSymsp) {
	var vlTOPp = this; // vlSymsp.TOPp;

//	console.log("    Vt00._eval\n");
	// Body
	if ((vlTOPp.clk) & (~(vlTOPp.__Vclklast__TOP__clk))) {
		vlTOPp._sequent__TOP__1(vlSymsp);
	}
	// Final
	vlTOPp.__Vclklast__TOP__clk = vlTOPp.clk;
};

Vt00.eval = function () {
	var __VclockLoop = 0,
	    vlSymsp = this.__VlSymsp; // Setup global symbol table
	    __Vchange = 1,
	    vlTOPp = vlSymsp.TOPp;

	// Initialize
	if (/*VL_UNLIKELY*/(!vlSymsp.__Vm_didInit)) { this._eval_initial_loop(vlSymsp) };
	// Evaluate till stable
	// console.log("----TOP Evaluate Vt00.eval");
	__VclockLoop = 0;
	__Vchange = 1;
	while (/*VL_LIKELY*/(__Vchange)) {
		console.log(" Clock loop");
		vlSymsp.__Vm_activity = true;
		this._eval(vlSymsp);	
		__Vchange = this._change_request(vlSymsp);
		if (++__VclockLoop > 100) {
			// vl_fatal
			console.log("Verilated model didn't converge");
			__Vchange = 0;
		}
	}
};
