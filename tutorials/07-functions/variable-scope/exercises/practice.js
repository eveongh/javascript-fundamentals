/**** VARIABLE SCOPE: PRACTICE ****/

/*
    Practice managing variable visibility and preventing 
    scope-related reference errors.
*/

/** EXERCISE 1: THE GLOBAL BEACON **/

// TODO: Declare a global constant on the line below named
// 'STATION_ID' and set it to "Tycho".
const STATION_ID = 'Tycho';

function broadcastBeacon() {
	// TODO: Inside this function, log `Broadcasting from: ${STATION_ID}`.
		console.log(`Broadcasting from: ${STATION_ID}`);
}

// TODO: Run the program to verify the scope is valid.
broadcastBeacon();

/** EXERCISE 2: ISOLATING RADIATION **/

function reactorRoom() {
	let radiationLevel = "CRITICAL";
	console.log(`Inside reactor room: ${radiationLevel}`);
}

reactorRoom();

/*
    TODO: Uncomment the line below and run the script. 
    Observe the error, then comment it out again to fix the program.
*/
//console.log("Bridge check: " + radiationLevel);

/** EXERCISE 3: LOOP SHADOWS **/

let sensorSectors = ["A", "B", "C"];

for (let i = 0; i < sensorSectors.length; i++) {
	let sectorMessage = `Scanning Sector ${sensorSectors[i]}`;
	console.log(sectorMessage);
}

/*
    TODO: Why will the line below crash the program? 
    Answer in a comment, then make sure the code remains commented out.
*/
//console.log(sectorMessage); 
//Answer: sectorMessage is block-scoped. Cannot be accessed outside of the loop. 

/** EXERCISE 4: SCOPE MIXER **/

let totalWaterReserves = 500; // Global variable (Metric Tons)

function consumeWater(amountNeeded) {
	// Local variable doing calculations
	let standardLossFactor = 1.05;
	let finalDeduction = amountNeeded * standardLossFactor;

	// Modifying a global variable from inside a function
	totalWaterReserves -= finalDeduction;
}

consumeWater(100);

// TODO: Print a sentence that verifies the new value of totalWaterReserves using a template literal
console.log(`Remaining Water: ${totalWaterReserves} t`); // 395 t