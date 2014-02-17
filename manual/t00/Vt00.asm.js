function Vt00 (stdlib, foreign, heap) {
//	"use asm";

	var floor = stdlib.Math.floor;

	var i8  = new stdlib.Int8Array(heap);
	var u8  = new stdlib.Uint8Array(heap);
	var i16 = new stdlib.Int16Array(heap);
	var u16 = new stdlib.Uint16Array(heap);
	var i32 = new stdlib.Int32Array(heap);
	var u32 = new stdlib.Uint32Array(heap);
	var f32 = new stdlib.Float32Array(heap);
	var f64 = new stdlib.Float64Array(heap);

	function Init () {
	}

	function GetState () {
		var top = {};
		top.a                    = u32[0  >> 2]|0;
		top.b                    = u32[4  >> 2]|0;
		top.c                    = u32[8  >> 2]|0;
		top.v__DOT__aa           = u32[12 >> 2]|0;
		top.v__DOT__bb           = u32[16 >> 2]|0;
		top.__Vdly__c            = u32[20 >> 2]|0;
		top.clk                  =  u8[24     ]|0;
		top.__Vclklast__TOP__clk =  u8[25     ]|0;
		return top;
	}

	function SetState (top) {
		u32[0  >> 2] = top.a|0;
		u32[4  >> 2] = top.b|0;
		u32[8  >> 2] = top.c|0;
		u32[12 >> 2] = top.v__DOT__aa|0;
		u32[16 >> 2] = top.v__DOT__bb|0;
		u32[20 >> 2] = top.__Vdly__c|0;
		 u8[24     ] = top.clk|0;
		 u8[25     ] = top.__Vclklast__TOP__clk|0;
	}

	function _sequent__TOP__1 () {
		// Body 1
		// __Vdly__c = vlTOPp->c;
		u32[20 >> 2] = u32[8  >> 2]|0;
		// node:ALWAYS at t00.sv:26
		// __Vdly__c = (0x1fffff & (vlTOPp->v__DOT__aa + vlTOPp->v__DOT__bb));
		u32[20 >> 2] = (0x1fffff & ((u32[12 >> 2]|0) + (u32[16 >> 2]|0))|0);
		// node:ALWAYS at t00.sv:24
		// vlTOPp->v__DOT__aa = vlTOPp->a;
		u32[12 >> 2] = u32[0  >> 2]|0;
		// node:ALWAYS at t00.sv:25
		// vlTOPp->v__DOT__bb = vlTOPp->c;
		u32[16 >> 2]  = u32[8  >> 2]|0;
		// vlTOPp->c = __Vdly__c;
		u32[8  >> 2] = u32[20 >> 2]|0;
	}

	function _eval () {
		// Body 1
		// if (((IData)(vlTOPp->clk) & (~ (IData)(vlTOPp->__Vclklast__TOP__clk)))) {
		if (( u8[24     ]|0) & (~( u8[25     ]|0))|0) {
			// vlTOPp->_sequent__TOP__1(vlSymsp);
			_sequent__TOP__1();
		}
		// Final
		// vlTOPp->__Vclklast__TOP__clk = vlTOPp->clk;
		 u8[25     ] =  u8[24     ]|0;
	}

	function eval_more () {
		var i;
		for (i = 0; i < 5000000; i++) {
			u8[24     ] = 0;
			_eval ();
			u8[24     ] = 1;
			_eval ();
		}
	}

	function clk (v) {
		v = v|0;
		 u8[24     ] = v|0;
	}

	return {
		Init : Init,
		SetState : SetState,
		GetState : GetState,
		clk : clk,
		eval : _eval,
		eval_more : eval_more
	};
}
