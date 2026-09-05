/**** INTRODUCTION TO FUNCTIONS ****/

/** EXAMPLE 1 - DECLARING & CALLING **/

// DEMO: Declare a function that prints a report when solar panels are deployed
function deploySolarPanels() {
    console.log("Unlatching hinges");
    console.log("Solar panels fully deployed.");
}

// DEMO: Call the function twice in a row to see it being used and reused
deploySolarPanels();
deploySolarPanels();

/** EXAMPLE 2 - CODE ORGANIZATION **/

// DEMO: Declare a function that prints an emergency message
function soundEmergencySiren () {
    console.log("ALERT: HULL BREACH DETECTED")
}

let hullBreach = true;

if (hullBreach) {
	// DEMO: Call the function to sound the siren
    soundEmergencySiren();
}

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
