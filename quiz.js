var button = document.getElementById("build");
var seed = {
		char:'a', //the object to seed the tree with
 		rows:0
	};
/////Functions\\\\\
// this functions listens for the return key being pressed
function enterKey(keyStroke) {
	if(keyStroke.keyCode === 13) {
		// console.log("I hit enter");
		tree(); //call tree if you his enter
	} 
}
//seed constructor
function Seed (){ //constructor
	this.char = document.getElementById("char").value;
	this.rows = parseInt(document.getElementById("numRows").value);
}
//printing functions
function printChars (printChar, amountToPrint) { //print the character
	let printStr = printChar;
	for(let printCounter = 0; printCounter < (2 * amountToPrint); printCounter++){ //print chars to row
		printStr += printChar; //create string to print
	}
	return printStr; //return the string
}

function printSpace (numRows, spaceToPrint) { //print the whitespace
	let printSpaceString = ""; //init the string
	let spaceCounter = spaceToPrint - 1; //The formula for white space is total rows - row number + 1
	while(spaceCounter < numRows) {
		printSpaceString += ' '; //add whitespace
		spaceCounter++; //increment
	}
	return printSpaceString; //return the string
}
//this is the MAIN tree function
function tree(){
	//console.log("Trigger", event); // test to see if function triggered
	
	var mySeed = new Seed(); //create a new seed

	if(mySeed.char.length === 1 && mySeed.rows > 0 ){ // error check for no char or more than one char
		for(let i = 0; i < mySeed.rows; i++){ //print rows
			console.log(printSpace(mySeed.rows, i), printChars(mySeed.char, i));//send whitespace and chars to console
		} 
	} else {
		alert("Please enter an integer and a single character");
		}
}	

/////Code\\\\\


button.addEventListener("click", tree);
window.addEventListener("keypress", enterKey);

