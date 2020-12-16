//* DOCKING DATA

let sampleDockingProgram = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`;

let actualDockingProgram = `mask = 01111X0011X11110XX11X110111001X00001
mem[26252] = 2785
mem[5529] = 156
mem[43194] = 29224
mem[64799] = 11208
mem[1727] = 138064713
mem[51786] = 67480
mask = 00010000011011101X0000X001X01001X0X0
mem[8820] = 143936540
mem[33783] = 33161
mem[60979] = 17936311
mem[19136] = 48558314
mem[55023] = 718791450
mem[1315] = 258018313
mem[1093] = 104780852
mask = 10111X1000X0001XX11011X11X0011100X00
mem[31605] = 115835374
mem[50005] = 5
mask = 1X011000XX101X101X0011100010X0100001
mem[42546] = 58538740
mem[42808] = 3851323
mem[54043] = 1022
mem[45712] = 43197369
mem[10795] = 2548035
mem[57363] = 1159
mem[54202] = 412819
mask = 10X100100000X1111X001101X111011XXX00
mem[16201] = 117522292
mem[31496] = 66092617
mem[50341] = 428
mask = 101X1X00100010101110X01111101111X0X1
mem[20313] = 147
mem[61510] = 51976
mem[21178] = 411
mem[9107] = 760422
mem[38572] = 283
mem[60979] = 140105821
mask = 110X000100001X11101001100X00100X1001
mem[56936] = 6185
mem[8457] = 28530693
mem[13561] = 3096
mem[53450] = 15673093
mem[60581] = 1214
mem[5903] = 2000318
mem[60351] = 211747206
mask = 00X1X0010X10X1111X001X00001000011X11
mem[62073] = 220574384
mem[27246] = 6492
mem[18869] = 1906219
mask = 101101X0X11010101X100X101X1X01100101
mem[37005] = 513427066
mem[45638] = 1726
mem[14004] = 201617
mem[42296] = 153436
mask = 10X11X0X00XX01X0X10X111X111001000111
mem[24455] = 217264
mem[57413] = 6770857
mem[14692] = 45473217
mem[3769] = 4757
mask = 11X1110X0110XXX0101011X000011X01X000
mem[305] = 70009
mem[26973] = 289
mask = X0X1X00010000X010110110X011011001101
mem[37863] = 1455937
mem[49769] = 20835743
mask = 00X10XX01100010101X0100100111X1011XX
mem[3341] = 459515075
mem[36300] = 6327157
mem[20441] = 10899
mem[16517] = 710704945
mem[51274] = 1493811
mask = X0110XXX011011101000100000X000X1X11X
mem[20041] = 22125189
mem[36402] = 33516
mem[22847] = 4075
mem[10171] = 1203
mem[12044] = 202447973
mem[1315] = 246
mask = 10X1X000101001101X10X000X011X0111100
mem[51796] = 29992104
mem[55005] = 402525408
mem[13871] = 10257878
mask = X001X0001110X110101X01110X0010X0000X
mem[36402] = 60926
mem[45811] = 691
mem[49840] = 86896
mem[2590] = 342
mem[46418] = 7319
mem[54758] = 965
mask = 001X00XX011X11101000010110111XXX1001
mem[19224] = 374258
mem[61699] = 264
mem[19638] = 15742629
mem[57494] = 26490
mem[49865] = 23438
mask = X00100X01X0X01X1X1101X010110101XX101
mem[25484] = 42806608
mem[33783] = 145323384
mem[40315] = 594
mem[13333] = 254578
mem[39809] = 7252815
mem[52735] = 116218816
mem[6129] = 20907
mask = 0001000X0110111X10XX11X0000000XX1X11
mem[5622] = 21277
mem[45634] = 1011054
mask = 1X01000X000010X11X10X0X00000XX00100X
mem[23412] = 54574
mem[7920] = 54188515
mem[21517] = 25879915
mem[57363] = 431157108
mem[49601] = 17444
mem[15096] = 2554701
mem[23477] = 13459467
mask = X001X000X11X100011X01001011110001010
mem[36987] = 568
mem[36660] = 246893
mem[57035] = 4038555
mask = 10111000X0X0XX1011X00XX00010X01111X1
mem[8554] = 380367
mem[5403] = 7418
mem[51786] = 65666977
mem[26546] = 12245509
mem[40806] = 311238844
mem[21066] = 11206516
mask = 10110000011011X010X0X1X01011X010XX1X
mem[49946] = 1458
mem[4373] = 280
mem[46610] = 376919
mask = 101100000X10100010001000X100011X011X
mem[35241] = 51240
mem[60111] = 134251890
mem[801] = 6325093
mem[63511] = 27310
mem[18392] = 74381
mem[17308] = 156337
mask = X011000001X110001001X01X1001X1111X01
mem[36574] = 12877161
mem[62337] = 10873578
mem[11275] = 6282
mem[8472] = 48322182
mem[47950] = 101617693
mem[43611] = 178631
mem[60979] = 5012394
mask = 10X1X10X0000001X1110101X1110001X111X
mem[16908] = 166150535
mem[21306] = 42743118
mem[36720] = 6104
mem[44038] = 11620193
mem[14668] = 9418931
mem[44777] = 163129610
mem[35702] = 37603
mask = 11111X01111XX10XX0110100010010000111
mem[43990] = 39315
mem[13335] = 730899404
mem[11921] = 37123
mem[42166] = 854850
mem[9345] = 9837
mem[49342] = 8178
mask = X001X0001000011011X00110111111XX1111
mem[18711] = 2221
mem[61699] = 3796
mem[55230] = 15319
mem[10562] = 800723991
mask = 1001X00000001XX11X10010000001XX010X1
mem[15283] = 6355
mem[27385] = 14166
mem[19691] = 1799151
mem[33024] = 26655
mem[21178] = 74692
mem[20014] = 72056
mask = 10110X0000X101101001110X11X010X011X0
mem[25478] = 80407
mem[24903] = 351387
mask = 001X1000101XX0X0X100001110X110X0X000
mem[12774] = 660172
mem[34604] = 5164578
mem[16522] = 34157571
mem[3105] = 121121
mask = 1X1111010110001010X0111001XX01110101
mem[34774] = 5535
mem[27256] = 759
mem[18452] = 5363
mem[4157] = 13424661
mask = X0111000000X01XX110X001X010X0X010X01
mem[7861] = 458333
mem[11882] = 575762
mem[60268] = 487130831
mem[54836] = 44610883
mask = X011100010XXX01011X00X11X111101X1X01
mem[10849] = 66137755
mem[60399] = 1014
mem[13849] = 1174900
mask = X011100010X1101010000X100X0XX01X0X00
mem[672] = 1156
mem[9106] = 1684
mask = 1011010XX1101X001X1000001XX0XXX11100
mem[10432] = 60137761
mem[43319] = 207
mask = 0001001X1000X1XX111010010111100X11X1
mem[64234] = 54143
mem[16908] = 459845976
mem[1018] = 13137550
mask = 1011XXX000000X10X1X01X0111110010X00X
mem[49893] = 532
mem[22512] = 670461
mem[63851] = 512
mem[8898] = 163198
mem[55005] = 186443
mem[63054] = 56429
mask = 11111101XX1X110010XX110X01000X1111XX
mem[15322] = 383518
mem[42546] = 1079125
mem[1163] = 34518
mask = 001101X00110101X10001000100000111X0X
mem[53977] = 6180
mem[28254] = 951979767
mem[49063] = 154022824
mem[18890] = 246364
mem[39131] = 917
mem[41779] = 100495
mem[65066] = 19510941
mask = 10111XX000010X011100111001X1010X0000
mem[59185] = 55549841
mem[37281] = 285118
mask = 1111110XX111X1X0101XX10X0X00001100X1
mem[62254] = 49558752
mem[32998] = 46668
mem[34162] = 1253623
mem[49419] = 85881740
mem[16573] = 26588931
mem[32165] = 1947339
mask = 100110001X1X10X0110010000010X0100001
mem[45229] = 384427
mem[38234] = 464797
mem[4762] = 218891416
mem[35007] = 28537580
mem[58929] = 7239342
mem[43990] = 19245
mask = 10X100001000110101100X110X00011X0001
mem[21908] = 411908340
mem[58137] = 13722534
mask = 1011100001101X1010X01XX1X01011110011
mem[36713] = 16064432
mem[31727] = 438484
mem[17413] = 278018
mem[35768] = 7599
mem[42661] = 25977
mask = 10X1100011101X1010001001100X1110110X
mem[39277] = 2216
mem[35504] = 6296182
mem[56628] = 19239933
mem[40710] = 60793
mem[44970] = 1758
mem[32245] = 1505
mask = 1X01110X001X0X001X01111X0X11100X0110
mem[10951] = 436
mem[35680] = 256295979
mem[44237] = 65038
mem[55023] = 11041
mem[39396] = 66
mask = 1111X11X00001010010011X01XX100010011
mem[49448] = 7397923
mem[39459] = 1101
mem[27280] = 3265569
mem[64594] = 27252
mask = 10X1X0001000011X11100X0XX1X110001XX1
mem[40696] = 7902220
mem[26058] = 99398102
mask = X01X00000XX0100110001001001001000110
mem[36439] = 102588728
mem[52916] = 2157364
mem[22195] = 70028
mask = 101X1010000X0X10X11010X1111010100100
mem[38732] = 1165
mem[53917] = 830
mem[50041] = 3286062
mem[56385] = 143054
mem[31727] = 20014
mem[53816] = 21421460
mask = 101101XXXX1011001X00X0X010100100001X
mem[25322] = 1199118
mem[42107] = 286897269
mem[16908] = 472712299
mem[50391] = 402436
mem[32810] = 1927
mem[39002] = 21799
mask = 000100X0101XXX101000000X00101X010001
mem[27962] = 8649
mem[10849] = 215568951
mem[8987] = 204760128
mem[26672] = 583
mem[20360] = 16749005
mem[43804] = 53939
mask = 10111X0000000010X100001X0001001X0010
mem[51228] = 181554669
mem[65073] = 49475
mem[17951] = 677777
mem[64944] = 18570433
mem[28254] = 6932
mem[27199] = 683
mask = 0011000001101110100X1X00X110X0100110
mem[27292] = 5688
mem[3126] = 9820
mem[48169] = 13170629
mask = XX1110X01X11100X00X001000X0110010111
mem[4635] = 44951228
mem[42419] = 5452
mem[15942] = 411631231
mem[46076] = 7066434
mask = 001X1X00X110101010X011X1110100X0X001
mem[53450] = 2352
mem[38234] = 251
mem[36660] = 368602019
mem[31727] = 3801
mem[61573] = 29290313
mask = 10111000X110X01010001001101011X011X1
mem[54931] = 641804
mem[38064] = 107414
mem[6286] = 95588
mem[26186] = 19167809
mask = 10X1100000X0001X110X0X110X0001110101
mem[63607] = 196293012
mem[37397] = 74862
mem[19292] = 318924812
mem[29261] = 13665
mem[25250] = 264997
mem[30191] = 3641
mem[57494] = 63004509
mask = 1001X00011101110101X0100X01001100X0X
mem[1481] = 82418090
mem[25265] = 1815
mem[33881] = 172103
mem[32784] = 22874
mem[8554] = 217
mem[54202] = 444131
mask = X01110000X0X0110110X1X0X0111XX0100X0
mem[7552] = 7475
mem[57906] = 82302467
mem[31613] = 113299
mem[58678] = 26311134
mem[62253] = 65990543
mem[4065] = 611064
mask = 1X11X110X000X010X10010111100X000XX1X
mem[11119] = 320765
mem[3769] = 42837319
mem[18392] = 10173
mask = 00010XX110000XX01X1X11X10011100XX100
mem[33575] = 8598574
mem[53173] = 1808
mem[19850] = 16935469
mem[31392] = 313339239
mem[38549] = 116034
mem[25962] = 444898
mask = 10111000X110101010X01X0X1X000XXX10X0
mem[19150] = 6547
mem[8554] = 72222
mem[56029] = 14274328
mem[35745] = 3739
mask = X1X111010110XX101010000X01X001X011X1
mem[566] = 907385
mem[51443] = 10041
mem[9645] = 5338013
mem[57457] = 85973
mask = 001110X0X1X010X0X0001X11X00100X1X011
mem[49601] = 966206419
mem[16391] = 14774065
mem[10765] = 3943
mem[11385] = 1053441
mem[9645] = 3674
mem[33267] = 5557039
mask = X0111X001XXX0010110000000111X001000X
mem[1854] = 18498
mem[33158] = 41774920
mem[62418] = 7153
mem[16528] = 7205
mask = X01X11X11110111010XXX000100100111000
mem[56899] = 82703
mem[34774] = 10579573
mem[56593] = 5775
mem[25931] = 745674
mem[52011] = 9761367
mem[20639] = 104027
mask = 10X11000101X10101X0X001001100X1X00XX
mem[5566] = 1099
mem[10795] = 956222
mem[16528] = 21229
mem[57906] = 49042881
mem[17670] = 181567
mem[40960] = 3605052
mask = 0011100X101000000100010XX0X0100X1000
mem[33906] = 90511
mem[60990] = 145571142
mem[27402] = 47129
mem[42809] = 1037812
mem[26424] = 897
mask = 101110X011X1X1101X001101011X00101011
mem[29570] = 3354
mem[40337] = 44880
mem[28402] = 497858
mem[26650] = 476674190
mem[62418] = 34025
mem[24168] = 699
mask = 10111000000X00101X01001100X01X11X011
mem[9001] = 533135094
mem[3225] = 1428927
mem[24172] = 147342
mem[45846] = 81574
mem[31727] = 302
mem[12998] = 488031
mask = 1X11110XX11X111010X010XXX0X000110001
mem[1093] = 361839
mem[49946] = 1789883
mem[51600] = 41971870
mem[59005] = 31231040
mem[36667] = 82411211
mem[36908] = 186875212
mask = 0011100011XXXXX00000111XX0000X110011
mem[59622] = 13776
mem[53783] = 86556420
mem[19116] = 192038
mem[46435] = 15488
mem[28402] = 456865626
mem[24036] = 192281
mask = X111X10X11X111101011010100XX10101001
mem[12408] = 891354
mem[5182] = 45755
mem[60784] = 339
mem[16899] = 2232
mem[65066] = 11310211
mask = 101X11X0111X1110X0001010X0XX00010X10
mem[31850] = 36538
mem[65266] = 16393094
mem[20521] = 12820
mask = 10011000101XX01011010X0X001X10010110
mem[14008] = 5237
mem[25962] = 13943751
mem[19638] = 209720371
mem[3799] = 191312955
mask = 10110000X11X10X0100X1X0X1010X1010X01
mem[20810] = 2332135
mem[58823] = 26503
mem[63041] = 5806
mem[60395] = 3480418
mem[44633] = 200491
mem[33377] = 695773
mask = 100110XX10101X1010001X10001001110000
mem[52884] = 1743
mem[9778] = 119536
mem[21499] = 356474913
mem[3126] = 2292214
mem[6910] = 175610
mem[55643] = 224868
mask = 101X110000110X10110X0111111001X00011
mem[55193] = 1563727
mem[62254] = 130412
mem[20399] = 3220120
mem[57494] = 49142855
mem[39459] = 14038947
mem[34539] = 17820
mem[51526] = 231931008
mask = 10X1100XX11X111X1X000111000100X10011
mem[49851] = 7594
mem[25848] = 55481
mem[65066] = 460629725
mem[47532] = 377061
mask = 10XX00010000101111100X111011101110X0
mem[61616] = 32889296
mem[11200] = 7530
mem[15283] = 18655
mem[25349] = 781
mem[45657] = 76012
mask = 10011000101X101011XX0X1001X0000X010X
mem[17670] = 1299588
mem[13821] = 186350
mem[16908] = 1062419043
mask = 1X11X000X111011010000011X110111X0X01
mem[28453] = 5700
mem[60954] = 2308171
mem[53802] = 335
mem[25187] = 8053
mem[53364] = 284593257
mem[65434] = 539563
mask = X0010000XX1011X010X00XX0XX1001000000
mem[54811] = 272
mem[36316] = 15229
mem[16561] = 203000701
mem[19638] = 568787
mask = X0110100X0X0110011X00000X01001X01100
mem[49992] = 15226
mem[51782] = 76988
mask = 1011X100X11011X010X0101X100X00111X11
mem[48976] = 243767847
mem[11299] = 901
mem[30490] = 1762085
mask = 1011XX00000101101XX111X011X0010X0101
mem[18890] = 10
mem[52697] = 9594326
mem[24790] = 13695
mem[12968] = 52010
mem[24579] = 112903
mem[54271] = 1070949
mask = 101X0X0000000X1011X010111X0001100000
mem[28459] = 684240
mem[56112] = 246013
mem[83] = 25183036
mem[31733] = 1094402
mem[31496] = 16701642
mask = X0011000X1101110X0X0100X0000X0010000
mem[17413] = 249
mem[17008] = 3978
mem[25265] = 516
mask = 10110000111010X0100111X11110010X00X1
mem[15233] = 178
mem[8781] = 266520286
mem[53730] = 407022173
mem[16980] = 12836825
mem[3698] = 63442
mem[3412] = 221236
mask = 11X11100011101001X110X000101XX1000X1
mem[49264] = 64836
mem[34162] = 16026
mem[42056] = 10587492
mem[44797] = 5732530
mem[13630] = 6578
mask = 100X00X01X00XXXXX110011100X111110101
mem[6004] = 283
mem[64151] = 121946
mask = 100XX0100X0011111100111001100X100100
mem[62107] = 30785
mem[13120] = 9822
mem[53973] = 24321
mem[36620] = 202312409
mask = 0X0100111000X10010101101X11X11100X10
mem[33202] = 99747
mem[16528] = 29834536
mem[404] = 72130
mem[41644] = 65330
mem[1031] = 507451055
mask = 10X1X0101X0X01XX111000000X10X1110101
mem[7276] = 7501209
mem[47302] = 295292983
mem[8554] = 16542
mem[41279] = 59129190
mem[58373] = 54870
mask = 0001000011X0010X01X01X0001100110X101
mem[8871] = 65653734
mem[3105] = 477
mem[60373] = 3247
mem[28472] = 154970
mem[40070] = 29940
mem[7630] = 223
mem[21911] = 909386168
mask = 10110X00011010XX10X0000XX010X111X101
mem[34303] = 21055620
mem[64944] = 33910
mem[25566] = 2387
mem[25265] = 26329844
mem[54527] = 960
mem[65089] = 56573
mem[46242] = 163
mask = X011XX0001101X1010001XXX1011X0X11001
mem[15942] = 1701
mem[33933] = 5999624
mem[37519] = 121764815
mem[65291] = 3664
mem[53344] = 717
mem[8554] = 41226
mask = 1001X0X0X000X11111X0X10X011X01X00101
mem[62160] = 452
mem[38885] = 365458
mem[3306] = 51496`;

//* PART ONE

// The initialization program (your puzzle input) can either update the bitmask or write a value to memory. Values and memory addresses are both 36-bit unsigned integers. For example, ignoring bitmasks for a moment, a line like mem[8] = 11 would write the value 11 to memory address 8.

// The bitmask is always given as a string of 36 bits, written with the most significant bit (representing 2^35) on the left and the least significant bit (2^0, that is, the 1s bit) on the right. The current bitmask is applied to values immediately before they are written to memory: a 0 or 1 overwrites the corresponding bit in the value, while an X leaves the bit in the value unchanged.

function sumOfValues(input) {
	let program = input.split('\n');
	
	const memoryObj = {};
	
	let maskStart = program[0].lastIndexOf(' ') + 1;
	let mask;

	// masks and values (36 bit) don't fit into the JavaScript 32-bit integers. all values are being converted into BigInt instead
	program.forEach(line => {
		if (line.length === 43) {
			mask = line.substring(maskStart);
		} else {
			let memoryAddress = line.substring(4, line.indexOf(' ') - 1);
			let value = BigInt(parseInt(line.substring(line.lastIndexOf(' ') + 1)));
	
			let maskA = BigInt(parseInt(mask.replace(/X/g, '1'), 2));
			let result = maskA & value;
	
			let maskB = BigInt(parseInt(mask.replace(/X/g, '0'), 2));
			result = maskB | result;
			
			memoryObj[memoryAddress] = result;
		}

		console.log(mask);
	})
	
	let sumOfValues = Object.values(memoryObj).reduce((a, c) => a + c, 0n);
	console.log(memoryObj, sumOfValues);
	return sumOfValues; 
}

// sumOfValues(sampleDockingProgram); // 165
// sumOfValues(actualDockingProgram); // 13496669152158


//* PART TWO

// A version 2 decoder chip doesn't modify the values being written at all. Instead, it acts as a memory address decoder. Immediately before a value is written to memory, each bit in the bitmask modifies the corresponding bit of the destination memory address in the following way:

// - If the bitmask bit is 0, the corresponding memory address bit is unchanged.
// - If the bitmask bit is 1, the corresponding memory address bit is overwritten with 1.
// - If the bitmask bit is X, the corresponding memory address bit is floating.
// A floating bit is not connected to anything and instead fluctuates unpredictably. In practice, this means the floating bits will take on all possible values, potentially causing many memory addresses to be written all at once!

let sampleDockingProgram2 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`;

function writeToAllPossibleAddresses(input) {
	
	// I. PARSE INPUT, CREATE VARIABLES
	const program = input.split('\n');
	
	const addressesObj = {};
	let mask;
	
	const maskStart = program[0].lastIndexOf(' ') + 1;
	const len = program.length;

	// II. ITERATE
	for (let i = 0; i < len; i++) {
		let line = program[i];

		// 3. if mask:
		// - set mask variable to new mask
		if (line.substring(0, 4) === 'mask') {
			mask = line.substring(maskStart);
			continue;
		}

		let memoryAddress = line.substring(4, line.indexOf(' ') - 1);
		memoryAddress = parseInt(memoryAddress).toString(2).padStart(36, '0');

		// 4. if mem:

		// 4.1. apply mask to address
		let maskedAddress = memoryAddress.split('').map((ch, i) => {
			if (mask[i] === '1') return '1'
			if (mask[i] === '0') return ch
			if (mask[i] === 'X') return 'X'
		}).join('');
		// console.log(maskedAddress);

		// 4.2. generate multiple addresses and convert them to decimal nums
		const permutations = [];
		let currentPerm = '';
		
		generatePermutations(0, currentPerm);
		
		function generatePermutations(i, currentP) {
			if (i === maskedAddress.length - 1) {
				if (maskedAddress[i] === 'X') {
					permutations.push(currentP + '1');
					permutations.push(currentP + '0');
				} else {
					permutations.push(currentP + maskedAddress[i]);
				}
			}
			if (maskedAddress[i] === 'X') {
				generatePermutations(i+1, currentP + '1');
				generatePermutations(i+1, currentP + '0');
				
			}
			if (maskedAddress[i] === '1' || maskedAddress[i] === '0') {
				generatePermutations(i+1, currentP + maskedAddress[i]);
			}
		}
		// console.log(maskedAddress, '\n', permutations);

		// 4.3. write every address to the addresses object with curr value

		let value = parseInt(line.substring(line.lastIndexOf(' ') + 1));
		permutations.forEach(address => addressesObj[address] = value)
	}
	
	// III. SUM
	// 4.4. calculate and return sum of values
	let sum = Object.values(addressesObj).reduce((a, c) => a + c, 0)
	console.log(sum);
	return sum;
}

// writeToAllPossibleAddresses(sampleDockingProgram2); // 208
writeToAllPossibleAddresses(actualDockingProgram); // 3278997609887

