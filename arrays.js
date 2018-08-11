var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(){
  var myArray = [1, 2, 3];
 myArray = [...myArray, 0];
  return myArray;
}
function destructivelyAddElementToBeginningOfArray(){
  var myArray = [1, 2, 3];
  myArray.push(0);
  return myArray;
}