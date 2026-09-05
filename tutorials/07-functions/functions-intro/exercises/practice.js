/**** INTRODUCTION TO FUNCTIONS: PRACTICE SOLUTION ****/

/*
    Practice declaring and invoking simple functions 
    to manage automated space station sub-routines.
*/

/** EXERCISE 1: THE WELCOME PROTOCOL **/

/*
    TODO: Declare a function named 'greetCrew'. Inside the function, 
    log "Welcome back, Captain." to the console. 
    Then, invoke the function once below its declaration.
*/

function greetCrew () {
    console.log("Welcome back, Captain.");
}

greetCrew ();

/** EXERCISE 2: LIFE SUPPORT BOOST **/

/*
    TODO: Declare a function named 'activateOxygenBoost'. 
    Inside, log "Pumping extra oxygen into sectors A-D... Done."
    Do not call it yet.
*/

function activateOxygenBoost () {
    console.log("Pumping extra oxygen into sectors A-D... Done.");
}

/** EXERCISE 3: TRIGGERING THE PROTOCOL **/

let crewIsSleepy = true;

/*
    TODO: Create an 'if' statement that checks if 'crewIsSleepy' 
    is true. If it is, invoke the 'activateOxygenBoost' function 
    you created in Exercise 2.
*/

if (crewIsSleepy) { 
    activateOxygenBoost();
}

/** EXERCISE 4: SEQUENTIAL AUTOMATION **/

function startEngines() {
	console.log("Engines: ONLINE.");
}

function clearLaunchPad() {
	console.log("Launch pad: CLEARED.");
}

/*
    TODO: Call 'clearLaunchPad' first, and then call 'startEngines' 
    immediately after to ensure a safe, sequential liftoff.
*/

clearLaunchPad();
startEngines();