// Your code here.

function reverseArray(array){
	var newArray = [];
	for (var i = 0; i < array.length; i++){
		newArray.unshift(array[i]);
	}
	return (newArray);
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayTwo(array){
	var newArray= [];
	for (var i = array.length - 1; i >= 0; i--){
		newArray.push(array[i]);
	}
	console.log(newArray[2]);
	return (newArray)
}

console.log(reverseArrayTwo(["A", "B", "C"]));



function reverseArrayInPlace(array) {
  console.log(array);
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    console.log(old);
    console.log(array);


    array[i] = array[array.length - 1 - i];
    console.log(array[i]);
    console.log(array);

    array[array.length - 1 - i] = old;
    console.log(array[array.length - 1 - i])
    console.log(array);
  }
  return array;
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]
