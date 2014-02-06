var verilated = verilated || {};

verilated.VL_IN8   = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_IN16  = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_IN32  = function (msb,lsb) { var x = 0; return x|0 };

verilated.VL_OUT8  = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_OUT16 = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_OUT32 = function (msb,lsb) { var x = 0; return x|0 };

verilated.VL_SIG8  = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_SIG16 = function (msb,lsb) { var x = 0; return x|0 };
verilated.VL_SIG32 = function (msb,lsb) { var x = 0; return x|0 };

verilated.VL_DEBUG_IF = function (fn) {};

verilated.VL_RAND_RESET_I = function (num) { return (Math.round(Math.random()*(Math.pow(2,num)))|0)};
