/**** PROCEDURAL RECURSION ****/

/* Recursion is a programming technique where a function calls itself t solve a smaller piece of a larger problem. 

To prevent recursive functions from calling itself forever (and crashing the system with a "Stack Overflow" error), it must have two things: 

The Base Case: The exit condition. The condition under which the function stops calling itself and starts returning values. 

The Recursive Case: The condition where the function calls itself again, but with a smaller or modified input, bringing it one step closer to the Base Case. */

/** EXAMPLE 1 - THE RADAR PING TRAVERSAL (Countdown) **/

// DEMO: Define a function that continues to report the signal strength of a
// radar ping moving farther and farther away until it can't be detected

function broadcastRadarPing(signalStrength){
    // Base case - if the signal drops to 0, stop broadcasting
    if (signalStrength <= 0) {
        console.log("Signal lost in the vacuum of space."); 
        return; 
    }

    //Action: log the current signal strength in dBm
    console.log(`Ping transmitted... Signal strenght: ${signalStrength}dBm`);

    // Recursive case
    broadcastRadarPing(signalStrength - 20);

}

// DEMO: Call the function, starting with a ping at 60 dBm strength
broadcastRadarPing(60);

/** EXAMPLE 2 - DIVIDE AND CONQUER (Grid Sub-division) **/

// DEMO: Simulate search-and-rescue teams splitting up grid sectors
function scanGridSector(sectorName, sectorSizeKm){
    // Base case
    if (sectorSizeKm <= 5){
        console.log(`Drone deployed toscan ${sectorName} (${sectorSizeKm}km zone.)`);
        return; 
    }

    // Recursive case
    let subSectorSize = sectorSizeKm / 2; 
    console.log (`Sector ${sectorName} (${sectorSizeKm}km) is too large. Sub-dividing...`);

    scanGridSector(`${sectorName} - Left Half`, subSectorSize); //Scan first sub-zone
    scanGridSector(`${sectorName} - Right Half`, subSectorSize); //Scan second sub-zone 
}

// DEMO: Call the function with a starting size of 20km
scanGridSector('Main grid', 20);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
