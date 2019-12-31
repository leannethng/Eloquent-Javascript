// Write about what this script is for here

// chessboard from http://eloquentjavascript.net/02_program_structure.html

var board = "";
var size = 4;

for(i = 0; i < size; i += 1){
	for(j = 0; j < size; j += 1){
		//if even in either row or column
    	if ((i + j) %2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
  board += "\n";
};

console.log(board);
