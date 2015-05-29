// Code goes here

// Create a function that operates on a binary string and converts it to a decimal number

// You can't use JavaScript built in parsing (parsInt and the like)
// Make the function available to be called on strings like the test cases below
// assert_equal("11001010".binaryToDecimal(), 202);
// assert_equal("1110".binaryToDecimal(), 14);


function binaryToDecimal(str){
  var arr = str.split('').reverse();
  var factor = 1;
  console.log("arr: ", arr);
  var num = [];
  arr.forEach(function(a){
    
    num.push(a*factor);
    factor*=2;
    console.log("num: ", num);
  });
  return num.reduce(function(acc, curr){
    return acc + curr;
  });
}

var res1 = binaryToDecimal("11001010");
 console.log("res1: ", res1);
 
 var res2 = binaryToDecimal("1110");
 console.log("res2: ", res2);
