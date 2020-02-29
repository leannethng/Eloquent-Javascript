
console.log('it works!');

// ----- Recursion -----

// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }

// function isEven(number){
// // check if number is a positive whole number, if not return 'please enter a whole number'

// if (number % 2 == 0) {
//   console.log('True');
//   console.log(`${number}`);
//   return `${number} `;

// } else if (number % 2 == 1) {
//   console.log('False')
//   return `${number} `;
// } else {
//   console.log('not a whole number')
//   return `${number} `;
// };
// }

function isEven(n) {
  
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  // else if (n === undefined) return 'It is Undefined';
  // else if (Number.isNaN(n)) return 'NaN'; 
  else return isEven(n - 2);
  }


isEven(4);

console.log(isEven())



// ------ Bean Counting -----------
// Your code here.
//console.log('string'[1]);

function countBs(string, letter){
  bCount = 0
  
for (i = 0; i < string.length; i++ ){
    if (string[i] === letter){
      //console.log(bCount += string[i].length);
        bCount += 1
       // console.log(bCount);
      };
//    console.log(bCount);
                       
  };
return console.log(bCount);
} 

countBs("BBBC", "B");
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4
