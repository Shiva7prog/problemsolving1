// Q1. A smart home system manages your house's lights, heating, and security.
// It automatically turns off lights if nobody's in the room, adjusts the temperature based on the season,
// and locks doors if nobody is home.
// If nobody is in the room, turn off the lights. If it's winter, set the temperature to 22 deg, if it's summer, set it to 18 deg. if nobody's home, lock the door

let lights=true;
let season='summer';
let heating='0 degrees';
let security=false;

if (lights='true'){
    console.log('lights turned on');
}else{
    console.log('lights turned off');    
}

if (season='winter'){
    heating='22 degrees'
    console.log('room temperature changed to',heating);
}else if(season='summer'){
    heating='18 degrees'
    console.log('room temperature changed to',heating);
}
if(security){
    console.log('opens the door');
}else{
    console.log('locks the door');
}

// -------------------------------------------------------
// Q2. A student needs to pass both math and science to graduate.
// if their math score is 50 or more and science score is 50 or more, they pass. 
//If they fail one or both, they don't graduate.

let math=50;
let science=49;

if (math>=50 && science>=50){
    console.log('graduated');
}else{
    console.log('does not graduated');
}

// -------------------------------------------------------
// Q3. You are booking a flight. You will buy a ticket if the ticket is less than 500 rs and 
//either departs in the morning or provides a meal during the flight
// If the flight meets your criteria, buy it. If not, look for another flight.

let ticket=490;
let depart='morning';
let meal=false;

if (ticket < 500 && depart || meal){
    console.log('book the ticket');
}else{
    console.log('look for another flight');
    
}

// -------------------------------------------------------
// Q4. You’re buying a laptop, and you want a machine with at least 8GB RAM and a good graphics card. You also have a budget of 80000.
// If it has 8GB RAM and a good graphics card and is within budget, buy it. If not, look for alternatives.

let budget=70000
let ram=12
let graphics='good'
if (budget <=80000 && ram >=8 && graphics =='good'){
    console.log('BUY THE LAPTOP');
}else{
    console.log('LOOK FOR ALTERNATIVE LAPTOP');
    
}

// -------------------------------------------------------
// Q5. You’re a teacher checking if a student can attend the class trip. 
// If the student has more than 80% attendance and a grade of B or higher, they can attend.
// If one of these conditions isn’t met, they can’t go.

const attendance=80;
const grade='b';
if (attendance > 80 && grade=='b' || grade=='a'){
    console.log('you are eligible to attend the trip');
}else{
    console.log('you cannot eligible to attend the trip');
    
}


