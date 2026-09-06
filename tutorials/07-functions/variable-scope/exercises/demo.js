/**** VARIABLE SCOPE ****/

/** EXAMPLE 1 - GLOBAL SCOPE **/

let shipName = "Rocinante";

function displayShipName() {
	console.log(`Transmitting identity: ${shipName}`);
}

// DEMO: Call the function above to see if the shipName variable is in scope
displayShipName(); //anything defined globally is accessible anywhere

/** EXAMPLE 2 - LOCAL SCOPE (Parameters & Functions) **/

// 'incomingWaterTons' is a parameter. It acts EXACTLY like a local variable!
function processDriveCoolant(incomingWaterTons) {
	let conversionFactor = 0.85; // Another local variable

	// We can use both local variables freely inside here
	let activeCoolantTons = incomingWaterTons * conversionFactor;
	console.log(`Coolant active in core: ${activeCoolantTons} t`);
}

// DEMO: Call the function above
processDriveCoolant(100);

// DEMO: Log the parameter incomingWaterTons on the line below. What happens?
//console.log(incomingWaterTons); //ref error

// DEMO: Log the variable conversionFactor on the line below. What happens?
//console.log(conversionFactor);  //ref error

/** EXAMPLE 3 - BLOCK SCOPE (Loops & Conditions) **/

let fuelPods = [20, 40, 10];

for (let i = 0; i < fuelPods.length; i++) {
	let temporaryCalculation = fuelPods[i] * 1.1;
	// DEMO: Un-comment this line to see what is happening when the loop runs
	console.log(`Pod adjusted weight: ${temporaryCalculation} t`);
}

// DEMO: Log the loop variable i to the console on the line below. What happens?
//console.log(i); //cannot be accessed outside of the block

// DEMO: Log temporaryCalculation to the console on the line below. What happens?

// DEMO: Make a git commit! 

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
  