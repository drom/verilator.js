module alu #(
	parameter W = 4
)(
	output [W-1:0] c,
	input  [W-1:0] a, b
);

assign c = a + b;

endmodule

module t00 #(
	parameter W = 72
)(
	output logic [W-1:0] c,
	input        [W-1:0] a, b,
	input clk
);

logic [W-1:0] aa, bb, cc;

alu #(.W(W)) u0 (.a(aa), .b(bb), .c(cc));

always_ff @(posedge clk) aa <= a;
always_ff @(posedge clk) bb <= b;
always_ff @(posedge clk) c <= cc;

endmodule
