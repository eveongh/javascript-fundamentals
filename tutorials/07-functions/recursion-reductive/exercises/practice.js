/**** REDUCTIVE RECURSION: PRACTICE ****/

/** EXERCISE: COMPUTE TIME TO DECAY **/

/*
    A piece of space debris loses 10% of its velocity every hour due to 
    atmospheric drag. We need to calculate how many hours it will take 
    for the velocity to drop below a safe threshold of 50 km/h.

    TODO: Complete the recursive function 'calculateHoursToDecay'.
    1. Base Case: If 'currentVelocity' is less than or equal to 'threshold', 
       return 0 (it requires 0 additional hours).
    2. Action: Calculate the new velocity by multiplying 'currentVelocity' by 0.9.
    3. Recursive Case: Calculate the remaining hours by calling the function 
       again with the new velocity. Then, RETURN 1 + that recursive result.
*/

function calculateHoursToDecay(currentVelocity, threshold){
   //base case
   if (currentVelocity <= threshold) {
   return 0;
   }

   //action
   let newVelocity = currentVelocity*0.9;

   //recursive case
   return 1 + calculateHoursToDecay(newVelocity,threshold);

}


// TODO: Starting at 80 km/h, count the hours until it hits 50 km/h,
// then print a sentence with that total to the console.

let hoursRequired = calculateHoursToDecay(80,50);
console.log(`Orbit will decay to safe speeds in ${hoursRequired} hours.`)