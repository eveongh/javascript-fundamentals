/**** REDUCTIVE RECURSION ****/

/** EXAMPLE - FUNCTIONAL REDUCTION **/

let podWeights = [12, 8, 15, 5];

// DEMO: Write a function that recursively totals the mass at each index in the array

// DEMO: Declare a variable to store the total mass and call the function, starting at index 0,
// then print a final report using the calculated total

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

function calculateTotalCargoMass(index) {
	// 1. BASE CASE: If we've checked every pod index, return a mass of 0
	if (index >= podWeights.length) {
		return 0;
	}

	// 2. RECURSIVE CASE: Return current mass + the recursive mass of the remaining pods
	// CRITICAL: We MUST use the 'return' keyword here so the values bubble back up!
	return podWeights[index] + calculateTotalCargoMass(index + 1);
}

// Start calculating from the very first pod (index 0)
let absoluteTotalMass = calculateTotalCargoMass(0);
console.log(`Total Fleet Cargo Mass: ${absoluteTotalMass} t`); // 40 t