
var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};


var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
		event.preventDefault();
	  var number1 = parseInt($("#add1").val());
	  var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});
});

// // <<------BMI Calculator-------->>
// var BMI = function (height, weight){
// 	return weight / Math.sqrt(height);
// }
//
// var height = parseInt(prompt("enter height"));
// var weight = parseInt(prompt("enter weight"));
//
// alert(BMI(height, weight))
//
//
// // <<------Farenheit to Celsius-------->>
// var celsius = function(farenheit, multiply, add) {
// 	return farenheit * multiply + add;
// }
//
// var farenheit = parseInt(prompt("enter farenheit"));
// var multiply = 1.8;
// var add = 32;
//
// alert(celsius(farenheit, multiply, add));
