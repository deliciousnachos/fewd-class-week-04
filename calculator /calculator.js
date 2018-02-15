
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



console.log(calculator.add(3,9));



document.querySelector('#operand').value


document.querySelector('#firstnum').value = num1;


document.querySelector('#lastnum').value = num2;





document.querySelector('#calculate').addEventListener('click', getAnswer);

function getAnswer() {
  document.querySelector('h1').innerHTML = ;
}







