//* RAMBUNCTIOUS RECITATION

let sampleNumbers1 = `0,3,6`;
let sampleNumbers2 = `1,3,2`;
let sampleNumbers3 = `2,1,3`;
let sampleNumbers4 = `1,2,3`;
let sampleNumbers5 = `2,3,1`;
let sampleNumbers6 = `3,2,1`;
let sampleNumbers7 = `3,1,2`;

let puzzleInput = `8,11,0,19,1,2`;


//* PART ONE & TWO

// In this game, the players take turns saying numbers. They begin by taking turns reading from a list of starting numbers (your puzzle input). Then, each turn consists of considering the most recently spoken number:

// - If that was the first time the number has been spoken, the current player says 0.
// - Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.

// So, after the starting numbers, each turn results in that player speaking aloud either 0 (if the last number is new) or an age (if the last number is a repeat).

//? Their question for you is:
//? — what will be the 2020th number spoken?
//? — what will be the 30000000th number spoken?

function playSpeakNumbers(input, until) {
	
	const numbers = input.split(',');
	console.log('input:', numbers);

	// IMPORTANT: Using the correct data type matters! E.g. Map "performs better in scenarios involving frequent additions and removals of key-value pairs" (MDN)
	const numsMap = new Map();
	
	// add the first portion of nums to the map
	numbers.forEach((num, idx) => numsMap.set(Number(num), idx + 1));
	
	// at each iteration, check if the num has been already spoken before. then, set the last value to either 0 or diff between the turns it was last invoked
	let last = numbers[numbers.length - 1];
	let turn = numbers.length + 1;
	
	for (; turn <= until; turn++) {
		// that's only for the 6 at the start
		if (numsMap.get(last) === turn - 1) {
			last = 0;
		} else {
			if (!numsMap.has(last)) {
				numsMap.set(last, turn - 1);
				last = 0;
			} else {
				let next = turn-1 - numsMap.get(last);
				numsMap.set(last, turn - 1);
				last = next;
			}
			
		}
		if (turn === until) {
			console.log(`number at ${until}: ${last}`);
			return last;
		}
		// console.log("turn: number", turn, ':', last);
	}

	console.log(numsMap)
}

let lastTurn = 200;
let lastTurn1 = 2020;

// TEST CASES:
// playSpeakNumbers(sampleNumbers1, lastTurn);
// playSpeakNumbers(sampleNumbers1, lastTurn1);
// playSpeakNumbers(sampleNumbers2, lastTurn1);
// playSpeakNumbers(sampleNumbers3, lastTurn1);
// playSpeakNumbers(sampleNumbers4, lastTurn1);
// playSpeakNumbers(sampleNumbers5, lastTurn1);
// playSpeakNumbers(sampleNumbers6, lastTurn1);
// playSpeakNumbers(sampleNumbers7, lastTurn1);

// playSpeakNumbers(puzzleInput, lastTurn1); // 447

let lastTurn2 = 30000000;

// playSpeakNumbers(puzzleInput, lastTurn2); // 11721679