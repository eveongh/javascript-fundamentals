/**** FUNCTION INPUT & OUTPUT: PRACTICE ****/

/*
    Practice handling dynamic inputs and capturing 
    valuable outputs from ship sub-routines.
*/

/** EXERCISE 1: PERSONALIZED THREAT ALERT **/

/*
    TODO: Declare a function named 'reportSectorStatus'. 
    It should take one parameter named 'sectorLetter'.
    Inside, log: "Warning: High radiation levels detected in Sector " followed by the parameter.
    Invoke the function passing "G" as the argument.
*/

function reportSectorStatus(sectorLetter){
    console.log(`Warning: High radiation levels detected in Sector ${sectorLetter}`); 
    }

    reportSectorStatus("G");

/** EXERCISE 2: SHIELD POWER ESTIMATOR **/

/*
    TODO: Declare a function named 'calculateShieldPower'.
    It should take two parameters: 'basePower' and 'boostFactor'.
    Inside, multiply 'basePower' by 'boostFactor' and RETURN the result.
    Do not call the function yet.
*/

function calculateShieldPower(basePower,boostFactor){
    return basePower*boostFactor; 
    }

/** EXERCISE 3: CAPTURING SHIELD OUTPUT **/

/*
    TODO: Invoke your 'calculateShieldPower' function from Exercise 2.
    Pass 50 as the basePower and 3 as the boostFactor.
    Capture the returned value in a constant named 'TOTAL_SHIELD'.
    Log 'TOTAL_SHIELD' to the console.
*/

const TOTAL_SHIELD = calculateShieldPower(50,3);
console.log(`Total Shield Strength: ${TOTAL_SHIELD}`); 

/** EXERCISE 4: THE IS-EMPTY CHECKER **/

/*
    TODO: Declare a function named 'isTankEmpty'.
    It should take one parameter named 'fuelLevel'.
    If 'fuelLevel' is 0, return true. Otherwise, return false.
    Test the output of your function with different values using console.log.
*/

function isTankEmpty(fuelLevel){
    if (fuelLevel === 0) {
        return true;
    }
    else {
        return false;
    }
}

isTankEmpty 
console.log(`Fuel level empty? ${isTankEmpty(0)}`);
console.log(`Fuel level empty? ${isTankEmpty(50)}`);