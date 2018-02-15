
var calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  exponent: function(num1, num2) {
    var result = 1;
    for (var i = 0; i < num2; i++) {
      result = result * num1;
    }
    return result;
  },
}




/*
when the user, who has typed the values into inputs,
clicks the button:
- we grab the operand, firstnum, lastnum, from the inputs 
- we look in the calcularo for the method that matches the operand
- we call that method using the firstnum and lastnum form the inputs
-we attach the result to the h1
*/


// console.log(calculator.add(3,9));





document.querySelector('#calculate').addEventListener('click', getAnswer);

function getAnswer() {
  var operand = document.querySelector('#operand').value;
  var firstnum = document.querySelector('#firstnum').value;
  var lastnum = document.querySelector('#lastnum').value;
  console.log(operand, firstnum, lastnum);
}



  // document.querySelector('h1').innerHTML = ;



