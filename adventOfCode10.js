const sample = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

const sampleAdapters = sample.split('\n').map(el => Number(el));

const real = `76
12
97
28
132
107
145
121
84
34
115
127
22
23
11
135
113
82
140
119
69
77
83
36
13
37
92
133
122
99
147
112
42
62
65
40
123
139
33
129
149
68
41
16
48
109
5
27
142
81
90
9
78
103
26
100
141
59
55
120
126
1
35
2
20
114
58
54
10
51
116
93
6
134
108
47
70
91
138
63
19
64
148
106
21
98
43
30
146
46
128
73
94
87
29`

const realAdapters = real.split('\n').map(el => Number(el));

function oneByThreeJoltDiffs(array) {
	const diffs = {ones: 0, threes: 0};
	// 
	const sortedAdapters = array.sort((a, b) => a - b);

	// loop through every adapter
	// until the end (until the list ends)
	// 
	let len = sortedAdapters.length;
	console.log(len);
	let prev = 0;
	for (i = 0; i < len; i++) {
		let curr = sortedAdapters[i];

		if (curr - prev === 1) {
			diffs.ones++;
			prev = curr;
			continue;
		}
		if (curr - prev === 2) {
			console.log('2!');
			prev = curr;
			continue;
		}
		if (curr - prev === 3) {
			diffs.threes++;
			prev = curr;
			continue;
		}
		// return `the loop is broken at ${curr}!`
	}

	diffs.threes++

	diffs.multiple = diffs.threes * diffs.ones;
	console.log(diffs);
	return diffs;
}

// oneByThreeJoltDiffs(sampleAdapters);
// oneByThreeJoltDiffs(realAdapters);

function findCombinations(array) {
	const combosArray = [];

	const sortedAdapters = array.sort((a, b) => a - b);
	
	// loop through the array and add the distances to the array
	let len = sortedAdapters.length;
	
	let prev = 0;
	for (i = 0; i < len; i++) {
		let curr = sortedAdapters[i];
		
		combosArray.push(curr - prev);
		prev = curr;
	}
	// map the ones in the combosMap
	const combosMap = [];
	let counter = 1;
	let distLen = combosArray.length;
	for (let i = 1; i < distLen; i++) {
		if (combosArray[i] === 1 && combosArray[i] === combosArray[i - 1]) {
			counter++;
			if (i === distLen - 1) {
				combosMap.push(counter)
			}
		} else {
			combosMap.push(counter);
			counter = 1;
		}
	}
	console.log(array, combosArray, combosMap);

	let magicNumber = combosMap.map(num => {

		//* Tribonacci sequence!
		//? https://brilliant.org/wiki/tribonacci-sequence/

		if (num > 1) {
			if (num === 2) return 2
			if (num === 3) return 4
			if (num === 4) return 7
		}
		return num
	}).reduce((acc, curr) => acc*curr, 1)

	console.log(magicNumber);
	return magicNumber
}

findCombinations(sampleAdapters);
findCombinations(realAdapters);