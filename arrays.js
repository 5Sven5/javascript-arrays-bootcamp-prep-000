var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var myArray = [1, 2, 3];
  myArray.unshift(array, element);
  return myArray;
}
addElementToBeginningOfArray('foo', 1);