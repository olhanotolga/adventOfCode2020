//* RAIN RISK

// The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:

//- Action N means to move north by the given value.
//- Action S means to move south by the given value.
//- Action E means to move east by the given value.
//- Action W means to move west by the given value.
//- Action L means to turn left the given number of degrees.
//- Action R means to turn right the given number of degrees.
//- Action F means to move forward by the given value in the direction the ship is currently facing.

let sampleInstr = `F10
N3
F7
R90
F11`;

const sampleArr = sampleInstr.split('\n');

let instructions = `F40
N1
W1
F95
W2
N5
R90
N3
E3
F21
E3
F44
W3
R90
N2
L180
E5
F99
W1
F11
R90
N4
F45
S5
L180
W1
R180
E5
R90
F5
S4
E3
S4
L180
W5
F26
F1
S3
L180
F79
R90
S5
R90
E5
L180
W4
F12
N5
E4
F31
S5
W2
F93
W2
F8
S2
E5
F100
L90
F10
R90
N1
F15
S3
E4
L90
L180
S3
E5
R90
F13
N4
F15
L90
W4
N4
W1
S5
F44
W4
F68
N2
W4
F58
L90
E5
F81
S5
L90
S1
F95
R90
E3
R180
F81
R90
S3
E3
L180
W4
W3
N1
W5
R270
W3
N4
W3
N4
F47
E3
R90
F86
S4
N1
R180
E2
N1
S5
R90
N4
L90
E3
R180
N1
W1
N3
E5
N2
F9
N4
R90
F36
E2
S1
R90
N2
F76
F88
E5
F78
W4
F53
N1
W1
R90
R180
N4
W5
S1
N2
E3
F83
L90
E3
L90
W2
L90
N1
W2
F21
R90
F58
S3
F100
S5
F78
S5
R90
E5
R90
W5
W1
L90
F23
L90
F56
W3
F8
W2
N5
F39
S5
F84
N4
R90
N4
F18
S4
F50
S1
E3
S5
L90
N2
W2
N1
F86
R90
S1
R90
L90
W2
F100
E4
L180
F100
E1
S5
W2
L90
N4
E4
R90
F94
W5
S5
L180
W5
S5
L90
S3
R180
E2
F22
R90
E4
F65
N1
E5
F82
W3
F100
E1
F87
L90
S4
W1
F10
W3
S2
F9
E2
F49
F35
E1
R90
F6
W4
F60
R90
S1
F45
W4
F44
E3
L90
W2
N3
L90
N2
W1
N2
W2
S4
E4
W5
R90
E4
L90
F16
W5
S3
N5
L90
F83
W4
L90
E2
F25
W3
R270
W3
L90
N5
F36
S4
R90
F15
R90
S2
L90
E5
F25
S3
F2
N4
W1
N2
F6
S3
R90
L90
W2
N2
E5
S3
L90
F31
W4
L90
N4
F30
S3
R90
S3
L180
W4
N4
F72
W3
S1
R90
F60
E4
R180
W4
S1
W4
R90
F10
E3
F58
E5
N2
W5
L180
N1
E1
R90
W5
N1
E3
L90
N2
R90
E2
R180
S1
R90
F91
L90
W4
N3
L270
F52
W2
R90
F92
N4
E5
F46
N2
F36
W3
L90
N5
F60
N1
S3
F94
L180
S1
R270
R180
F26
S1
F23
E5
R90
F27
S3
L90
F8
E5
F5
S1
R90
F99
W3
F47
W3
S3
W1
L180
W3
R180
F41
L180
E2
L180
N5
R90
F17
S2
E2
F2
R90
N2
F53
S4
L90
F87
R180
E1
S4
F43
R90
F45
W4
F7
W5
L90
W4
L90
E3
L90
E3
R90
F14
N1
F23
E4
N1
N1
R90
F98
L180
E5
F92
R180
E4
S2
R270
W3
L180
E1
S5
N3
E5
R90
E3
L90
F21
F84
L90
S5
R90
F68
L180
E3
L90
W4
F18
S4
W5
L90
R180
W1
L180
F88
E3
N3
W3
S3
L90
F69
R180
W4
F98
S3
L90
E2
N2
F26
E2
E1
N2
W5
R90
W1
F13
W4
R180
N2
F25
W4
F89
W4
F76
S5
F73
E1
N3
L90
E4
F97
L180
N2
R180
E1
F88
E3
N5
W2
F62
S3
E5
R180
N1
N3
N4
F3
W2
R180
F28
L90
S4
E1
L90
E4
F63
R90
N2
R90
F22
N3
L90
W4
S1
F67
W5
N4
F44
S4
F64
L180
W3
N2
W1
F63
N3
R90
S5
R90
F20
L180
L270
S1
L90
F66
W5
R90
N1
L180
W4
F94
S3
R180
F18
L90
F29
S3
L90
S4
F74
L90
F85
F35
R90
S4
F68
R90
F44
S2
W4
S2
F27
R90
E5
F30
E1
L90
W4
F39
N3
L90
E1
S4
F87
W2
L90
N3
W1
F51
W1
L180
F24
N2
E1
N2
F4
R90
E3
S1
F69
R90
E4
F31
L90
S3
E3
E5
L90
F75
E4
L90
F14
L90
N1
R90
F36
S4
F49
L90
N5
W3
R90
F35
L180
R180
F26
W3
F16
R90
F90
E3
N3
F87
N5
L180
F4
R90
N1
E4
N5
F93
W1
N4
L90
F35
L90
W1
E3
N5
W5
F5
S1
W1
N1
F61
S1
W2
N1
R90
F26
R90
L90
W4
F12
R90
W1
R90
F18
E1
F14
N3
W3
S2
F25
E5
F89
W5
L90
S4
F38
L180
F98
W3
S1
F77
R270
E2
F95
W1
F56
N4
R180
E3
L270
E1
F6
S3
L180
E5
R180
E1
N2
L180
E4
S3
E2
L180
F72
N4
R90
L90
W4
F82
S3
R270
F32
F39
L90
N5
W1
L90
N3
F95
L180
S5
L90
F46
E1
L90
W2
S5
L90
S5
F77
L90
N4
E3
N1
F39
R90
R90
F40
L90
N4
W1
F7
E4
S5
E5
N1
F96
E4
F10
F8
S5
E5
F26
S4
R90
S2
F61
W4
S4
R90
E2
F39
S5
R90
S4
F83
S5
F18
S3
E5
R180
F7`

const instructionsArray = instructions.split('\n');

function calcManhattanDistance(instr) {
	const NESWarr = ['N', 'E', 'S', 'W'];
	const degreesArr = [90, 180, 270];

	const manDistObj = {
		N: 0,
		S: 0,
		E: 0,
		W: 0
	}

	// resetting the current direction when the instruction is 'R' or 'L'
	function setCurrentForR(currDir, instrValue) {
		return NESWarr[(NESWarr.indexOf(currDir) + (degreesArr.indexOf(instrValue)+1) + 4) % 4];
	}
	function setCurrentForL(currDir, instrValue) {
		return NESWarr[(NESWarr.indexOf(currDir) - (degreesArr.indexOf(instrValue)+1) + 4) % 4];
	}
	
	// track the direction with the curr variable, set it to 'E' at the start
	let curr = 'E';

	instr.forEach(ins => {
		// isolate the actions and value for each instruction:
		let letter = ins[0];
		let val = Number(ins.substring(1));

		// R and L instructions:
		if (letter === 'R') {
			curr = setCurrentForR(curr, val);
			// console.log(curr);
		} else if (letter === 'L') {
			curr = setCurrentForL(curr, val);
		} else if (letter === 'F') {
			manDistObj[curr] += val;
			// console.log(curr);
		} else {
			manDistObj[letter] += val;
		}

		console.log(curr, manDistObj);
	
	})

	let manhattanDistance = Math.abs(manDistObj.N - manDistObj.S) + Math.abs(manDistObj.E - manDistObj.W);
	console.log(manDistObj, manhattanDistance);
	return manhattanDistance;
}

// calcManhattanDistance(sampleArr); // { N: 3, E: 17, S: 11, W: 0 } 25
// calcManhattanDistance(instructionsArray); // { N: 2480, S: 2670, E: 2387, W: 2954 } 757


//* PART TWO

// Almost all of the actions indicate how to move a waypoint which is relative to the ship's position:

// Action N means to move the waypoint north by the given value.
// Action S means to move the waypoint south by the given value.
// Action E means to move the waypoint east by the given value.
// Action W means to move the waypoint west by the given value.
// Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
// Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
// Action F means to move forward to the waypoint a number of times equal to the given value.

// The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.

function calcManhattanDistanceWaypoint(instr) {
	const NESWarr = ['N', 'E', 'S', 'W'];
	const degreesArr = [90, 180, 270];

	const shipLocation = {
		N: 0,
		E: 0,
		S: 0,
		W: 0
	}
	
	// rotating the waypoint when the instruction is 'R' or 'L'
	function setCurrentForR(currDir, instrValue) {
		return NESWarr[(NESWarr.indexOf(currDir) + (degreesArr.indexOf(instrValue)+1) + 4) % 4];
	}
	function setCurrentForL(currDir, instrValue) {
		return NESWarr[(NESWarr.indexOf(currDir) - (degreesArr.indexOf(instrValue)+1) + 4) % 4];
	}
	
	// track the waypoint direction with the curr variable, set it to 'E' and 'N' at the start
	const waypoint = [['E', 10], ['N', 1]]
		
	instr.forEach(ins => {
		// isolate the actions and value for each instruction:
		let letter = ins[0];
		let val = Number(ins.substring(1));

		// R and L instructions:
		if (letter === 'R') {
			waypoint[0][0] = setCurrentForR(waypoint[0][0], val);
			waypoint[1][0] = setCurrentForR(waypoint[1][0], val);
		} else if (letter === 'L') {
			waypoint[0][0] = setCurrentForL(waypoint[0][0], val);
			waypoint[1][0] = setCurrentForL(waypoint[1][0], val);

		} else if (letter === 'F') {
			// both waypoint values * val
			// ship location + multiplied waypoint val
			shipLocation[waypoint[0][0]] += waypoint[0][1] * val;
			shipLocation[waypoint[1][0]] += waypoint[1][1] * val;
		} else {
			// instructions on how to move the waypoint
			if (letter === 'N') {
				for (let dir of waypoint) {
					if (dir[0] === 'N') dir[1] += val
					if (dir[0] === 'S') dir[1] -= val
				}
			}
			if (letter === 'S') {
				for (let dir of waypoint) {
					if (dir[0] === 'S') dir[1] += val
					if (dir[0] === 'N') dir[1] -= val
				}
			}
			if (letter === 'E') {
				for (let dir of waypoint) {
					if (dir[0] === 'E') dir[1] += val
					if (dir[0] === 'W') dir[1] -= val
				}
			}
			if (letter === 'W') {
				for (let dir of waypoint) {
					if (dir[0] === 'W') dir[1] += val
					if (dir[0] === 'E') dir[1] -= val
				}
			}
		}
	
	})

	let manhattanDistance = Math.abs(shipLocation.N - shipLocation.S) + Math.abs(shipLocation.E - shipLocation.W);
	console.log(shipLocation, manhattanDistance);
	return manhattanDistance;
}

calcManhattanDistanceWaypoint(sampleArr) // { N: 38, E: 214, S: 110, W: 0 } 286
calcManhattanDistanceWaypoint(instructionsArray) // { N: 57839, E: 91327, S: 103741, W: 85980 } 51249