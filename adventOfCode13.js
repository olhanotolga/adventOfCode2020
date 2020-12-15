//* SHUTTLE SEARCH

let sampleNotes = `939
7,13,x,x,59,x,31,19`;

let realNotes = `1003681
23,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,431,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,19,x,x,x,x,x,x,x,x,x,x,x,409,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29`;


//* PART ONE
// Bus schedules are defined based on a timestamp that measures the number of minutes since some fixed reference point in the past. At timestamp 0, every bus simultaneously departed from the sea port. After that, each bus travels to the airport, then various other locations, and finally returns to the sea port to repeat its journey forever.

// The time this loop takes a particular bus is also its ID number: the bus with ID 5 departs from the sea port at timestamps 0, 5, 10, 15, and so on. The bus with ID 11 departs at 0, 11, 22, 33, and so on. If you are there when the bus departs, you can ride that bus to the airport!

// Your notes (your puzzle input) consist of two lines. The first line is your estimate of the earliest timestamp you could depart on a bus. The second line lists the bus IDs that are in service according to the shuttle company; entries that show x must be out of service, so you decide to ignore them.

// To save time once you arrive, your goal is to figure out the earliest bus you can take to the airport. (There will be exactly one such bus.)

// What is the ID of the earliest bus you can take to the airport multiplied by the number of minutes you'll need to wait for that bus?

function busIDxWaitingTime(notes) {
	let timestamp = Number(notes.split('\n')[0]);
	console.log('timestamp:', timestamp);
	const buses = notes.split('\n')[1].match(/\d+/g).map(bus => Number(bus)).sort((a, b) => a - b);
	console.log('buses:', buses);

	// starting with the timestamp and incrementing by 1, find out if the num is a multiple of any of the bus IDs

	let curr = timestamp;
	let lastBus = buses[buses.length - 1];
	while (timestamp - curr <= lastBus) {
		for (let bus of buses) {
			// console.log(curr);
			if (curr % bus === 0) {
				let idXwaitingTime = (curr - timestamp)*bus;
				console.log(curr, timestamp, bus, idXwaitingTime);
				return idXwaitingTime;
			}
		}
		curr++
	}

}

// busIDxWaitingTime(sampleNotes);
// busIDxWaitingTime(realNotes);

//* PART TWO

// The shuttle company is running a contest: one gold coin for anyone that can find the earliest timestamp such that the first bus ID departs at that time and each subsequent listed bus ID departs at that subsequent minute. (The first line in your input is no longer relevant.)

function earliestTimeset(notes) {
	const buses = notes.split('\n')[1].split(',');
	const busIds = [];
	const offsetsAndBuses = buses.reduce((acc, curr, idx) => {
		if (curr !== 'x') {
			acc[curr] = idx;
			busIds.push(curr);
			return acc;
		}
		return acc;
	}, {})
	
	console.log(offsetsAndBuses);
	console.log(busIds);
	
	let len = busIds.length;
	
	let currentBus = busIds[0];

	let coefficient = Number(currentBus);
	let multiplier = 1;
	let timestamp = 0;
	let potentialTS = timestamp + coefficient * multiplier;
	
	for (let i = 1; i < len; i++) {
		
		let nextBus = busIds[i];
		
		while ((potentialTS + Number(offsetsAndBuses[nextBus])) % Number(nextBus) !== 0) {
			multiplier++;
			potentialTS = timestamp + coefficient * multiplier;
		}

		if ((potentialTS + Number(offsetsAndBuses[nextBus])) % Number(nextBus) === 0) {

			console.log(`potential timestamp for bus${currentBus} and bus${nextBus}: ${potentialTS}`);
			if (i === len - 1) {
				console.log(`the ultimate timestamp found! — ${potentialTS}`);
				return potentialTS;
			}

			multiplier = 1;
			timestamp = potentialTS;
			coefficient = coefficient * Number(nextBus);
			potentialTS = timestamp + coefficient * multiplier;
			currentBus = nextBus;
			console.log('potential timestamp after resetting:', potentialTS);

		}
	}
}


let sample1 = `\n17,x,13,19`;
let sample2 = `\n67,7,59,61`;
let sample3 = `\n67,x,7,59,61`;
let sample4 = `\n67,7,x,59,61`;
let sample5 = `\n1789,37,47,1889`;

// TEST CASES:
// earliestTimeset(sampleNotes) // 1068781
// earliestTimeset(sample1) // 3417
// earliestTimeset(sample2) // 754018
// earliestTimeset(sample3) // 779210
// earliestTimeset(sample4) // 1261476
// earliestTimeset(sample5) // 1202161486

// earliestTimeset(realNotes) // 402251700208309
