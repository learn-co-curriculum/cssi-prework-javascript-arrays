'use strict';

function createArray(){
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(myArray){
  myArray.push("A Christmas Story");
  return myArray;
}

function accessElementFromArray(myArray){
  return myArray[2];
}

function replaceElementInArray(myArray){
  myArray[1] = "Carter"
  return myArray;
}

function removeElementFromArray(myArray){
 myArray.splice(2,2, "Roast Chicken") ;
 return myArray;
}

function iterateArray(myArray){
  var newArray = [];
  myArray.forEach(function(item){
    newArray.push(item+5);
  })
  return newArray;
}