// Your code here.
function range(start, end, step){
	if (step == null) step = 1;
	var array = [];
	if(step > 0){
		for (var i = start; i <= end; i += step) {
	      array.push(i);
      //console.log(array);
    };
	} else{
		for (var i = start; i >= end; i += step) {
	      array.push(i);
			}
		}
	return array;
}

function sum(array){

	var count = 0;
	for (var i = 0; i < array.length; i++){;
		count += array[i];
	}

	return count;
}



//console.log(range(20, 30));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
