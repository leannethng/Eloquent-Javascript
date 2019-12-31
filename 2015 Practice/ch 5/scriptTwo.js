// Your code here.
function deepEqual(a, b){
	// if(a === b){
  //   	return true;
  //   }
  // 	if(a == null || typeof a!='object'|| b == null || typeof b!= 'object') {
  //   	return false;
  //   }

  	var propsInA = 0;
  	var propsInB = 0;


  	for(var prop in a){
    	propsInA += 1;
    }
    console.log(a[prop]);

  	for(var prop in b){
    	propsInB += 1;
    	}
    }


var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
