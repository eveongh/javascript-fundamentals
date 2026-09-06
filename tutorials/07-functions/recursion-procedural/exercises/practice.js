/**** PROCEDURAL RECURSION: PRACTICE ****/

/*
    Practice writing recursive logic by defining clear base cases 
    and stepping dynamically toward them.
*/

/** EXERCISE 1: EMERGENCY LIFT COUNTDOWN **/

/*
    TODO: Write a recursive function named 'launchCountdown' that takes a 'seconds' parameter.
    1. Base Case: If seconds is 0, log "Ignition!" and stop (return).
    2. Action: Log "T-Minus " followed by the seconds.
    3. Recursive Case: Call 'launchCountdown' with seconds - 1.
*/

function launchCountdown(seconds) {
    //base case 
     if (seconds === 0) {
        console.log("Ignition!"); 
        return; 
    }
    //action 
    console.log (`T-minus ${seconds}`);

    //recursive case
    launchCountdown(seconds -1);
}
// TODO: Call the function, starting at 3 seconds

launchCountdown(3);

/** EXERCISE 2: ICE EXTRACTION DEPTH-CHECK **/

/*
    TODO: Write a recursive function named 'drillForIce' that takes 'currentDepth' and 'targetDepth'.
    1. Base Case: If currentDepth equals or exceeds targetDepth, log "Water ice vein reached!" and return.
    2. Action: Log "Drilling... currently at " + currentDepth + " meters."
    3. Recursive Case: Call 'drillForIce', increasing currentDepth by 5.
*/

function drillForIce(currentDepth, targetDepth){
    //base case
    if (currentDepth >= targetDepth) {
        console.log("Water ice vein reached!"); 
        return; 
    }

    //action 
    console.log(`Drilling... currently at ${targetDepth} meters.`)

    //recursive case
    drillForIce(currentDepth+5 , targetDepth)

}

// TODO: Call the function, starting with a current depth of 0 and target depth of 15

drillForIce(0,15);

/** EXERCISE 3: REPAIRING THE RECURSIVE LOOP **/

/*
    TODO: The function below is broken and causes an infinite loop! 
    Fix the code so that it correctly stops when fuel hits 0.
*/

function consumeThrusterFuel(fuelAmount) {
	// FIX: Added the base case to stop the recursion
	if (fuelAmount <= 0) {
		console.log("Thruster depleted. Burn complete.");
		return;
	}

	console.log(`Burning thrusters... Fuel left: ${fuelAmount} t`);
	consumeThrusterFuel(fuelAmount - 10);
}

// TODO: Call the function, starting with a fuel amount of 30t

consumeThrusterFuel(30);