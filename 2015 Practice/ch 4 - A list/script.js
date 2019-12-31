
	// function arrayToList(value) {
	// 	var list = [];
	// 	console.log(value.length - 1);
	// 	for (var i = value.length - 1; i >= 0; i--){
	// 		console.log(list);
	// 	  list.push({
	// 	    value: value[i],
	// 	    rest: list
	// 	  });
	// 		console.log(list);
	// 	};
	// 	return list
	// }


function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--){
    list = {
			value: array[i],
			rest: list
		};
		//console.log(list);
	};
  return list;
}


function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		console.log(node);

		array.push(node.value);
	}
	return array;
}


//console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
