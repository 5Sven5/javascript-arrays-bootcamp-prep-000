var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var myArray = [];
  array.unshift('foo');
  return myArray;
}
addElementToBeginningOfArray(myArray, 'foo');