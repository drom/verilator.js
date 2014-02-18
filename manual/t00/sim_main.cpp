// DESCRIPTION: Verilator Example: Top level main for invoking model
//
// Copyright 2003-2014 by Wilson Snyder. This program is free software; you can
// redistribute it and/or modify it under the terms of either the GNU
// Lesser General Public License Version 3 or the Perl Artistic License
// Version 2.0.

#include <verilated.h>		// Defines common routines
#include "Vt00.h"		// From Verilating "top.v"
#include <time.h>
#if VM_TRACE
# include <verilated_vcd_c.h>	// Trace file format header
#endif

Vt00 *top;			// Instantiation of module

vluint64_t main_time = 0;	// Current simulation time (64-bit unsigned)

double sc_time_stamp () {	// Called by $time in Verilog
    return main_time;		// Note does conversion to real, to match SystemC
}

int main(int argc, char **argv, char **env) {
	vluint64_t i = 0;
	double cout;

	if (0 && argc && argv && env) {}	// Prevent unused variable warnings
    	top = new Vt00;		// Create instance of module

    Verilated::commandArgs(argc, argv);
    Verilated::debug(0);

#if VM_TRACE			// If verilator was invoked with --trace
//    Verilated::traceEverOn(true);	// Verilator must compute traced signals
//    VL_PRINTF("Enabling waves...\n");
//    VerilatedVcdC* tfp = new VerilatedVcdC;
//    top->trace (tfp, 99);	// Trace 99 levels of hierarchy
//    tfp->open ("vlt_dump.vcd");	// Open the dump file
#endif

    top->a = 1111;
    top->b = 0;
    top->c = 0;
    top->v__DOT__aa = 0;
    top->v__DOT__bb = 0;
    top->clk = 0;
    top->__Vclklast__TOP__clk = 0;

	clock_t startTime = clock();

    for (i = 0; i < 50000000; i++) {
		top->clk = 0;
		top->eval();
		top->clk = 1;
		top->eval();
	}

	cout = double(50 / (double( clock() - startTime ) / (double)CLOCKS_PER_SEC));

	// Read outputs
	VL_PRINTF ("time:%f    a:%d aa:%d b:%d bb:%d c:%d\n", cout, top->a, top->v__DOT__aa, top->b, top->v__DOT__bb, top->c);
}
