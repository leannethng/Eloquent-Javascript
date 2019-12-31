// Your code here.
function isEven(number){
	if (number % 2 === 0){
    	return true;
    } else if (number % 2 === 1){
    	return false;
    } else if (number < 0){
  		return isEven(-number);
    }else (isEven(number - 2));

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-3));
// → ??
