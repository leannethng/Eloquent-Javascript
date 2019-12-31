// Your code here.
function countBs( word ){
	var count = 0;
    for (i= 0; i < word.length; i++) {
    	if(word.charAt(i) === 'B'){
        	count += 1;
        };
    };
  console.log(count);
  return count;
}

countBs("BBC");
countBs("Brace")

//console.log(countBs("BBC"));
// → 2

function countChar( word, letter){
	var count = 0;
    for (i= 0; i < word.length; i++) {
    	if(word.charAt(i) === letter){
        	count += 1;
        };
    };
  console.log(count);
  return count;
}

countChar("kakkerlak", "k");

//console.log(countChar("kakkerlak", "k"));
// → 4
