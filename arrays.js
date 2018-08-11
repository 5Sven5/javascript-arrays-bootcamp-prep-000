var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var myArray = [1, 2, 3];
  [...array, element];
  return array;
}
addElementToBeginningOfArray("array", 1);