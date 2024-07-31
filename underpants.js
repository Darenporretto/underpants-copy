// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//Functional Library

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) ==> 5
*   _.identity({a: "b"}) ==> {a: "b"}
*/

_.identity = function(value) {
    //return value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //if value is an array return array
   if (Array.isArray(value)) {
    return 'array';
   }
   //if null return null
   if (value === null) {
    return 'null';
   } //return typeofvalue
   return typeof value;
}  


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

    _.first = function(array, number) {
    //is array is not an array
    if (!Array.isArray(array)) {
      return [];
    }
  
    //check if number not a number
    if (typeof number !== 'number') {
      return array[0];
    }
  
    //input negative numbers
    if (number < 0) {
      return [];
    }
  
    //return the first number items of the array, or the whole array if number is greater than array length
    return array.slice(0, number);
  }



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

    _.last = function(array, number) {
    //check for if array is not an array
    if (!Array.isArray(array)) {
      return [];
    }
  
    //make sure if number is not a number
    if (typeof number !== 'number') {
      return array[array.length - 1];
    }
  
    //input negative numbers
    if (number < 0) {
      return [];
    }
  
    //if number is greater than the array length, return the whole array
    return array.slice(-number);
  }


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


    _.indexOf = function(array, value) {
    //check if array is actually an array
    //iterate through the array
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i; //return the index of the first occurrence
      }
    }
    //if value is not found, return -1
    return -1;
  }


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
    _.contains = function(array, value) {
    //check if array is actually an array and is not empty
    if (!Array.isArray(array)) {
      return false;
    }
    //check if value is given use the ternary operator to determine if the value is present in the array
    return array.some(item => item === value) ? true : false;
  }


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
    _.each = function(collection, func) {
    //check is the collection is an array
    if (Array.isArray(collection)) {
      //iterate over the array and call the funcion with (element, index and collection)
      for (let i = 0; i < collection.length; i++) {
        func(collection[i], i, collection);
      }
    } 
    //check if the collection is an object
    else if (typeof collection === 'object' && collection !== null) {
      //iterate over the object's properties and call the function with (value, key and collection)
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          func(collection[key], key, collection);
        }
      }
    }
  }


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

    _.unique = function(array) {
    //check input is an array
    if (!Array.isArray(array)) {
      return [];
    }
  
    //create empty array to store unique values
    let result = [];
  
    //iterate over each element in the original array
    for (let i = 0; i < array.length; i++) {
      // use _.indexOf to check if elements is already in the result array
      if (_.indexOf(result, array[i]) === -1) {
        //if no add the element to the result array
        result.push(array[i]);
      }
    }
  
    //return result array with unique elements
    return result;
  }


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
*   _.filter(['alex', 'francis', 'aaron'], function(x){return x[0] === 'a'}); -> ['alex', 'francis']
* Extra Credit:
*   use _.each in your implementation
*/
/*
i:takes in an array and function
o:returns a new array
*/

_.filter = function(array, func){
    //create ouput array
    let output = [];
    //create a for loop to iterate over our array
    for (let i = 0; i < array.length; i++){
        //determine if the result of invoking func is true
        if (func(array[i], i, array) === true){
            output.push(array[i]);
        }
    }
    return output;
}

//filter
    //callback function is used to 'test' each item in an array (retutns true/false)
//map
    //callback function takes in an item from the array and returns a new version




/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

    _.reject = function(array, func) {
    //initialize an empty array to store elements that do not satisfy the func
    let result = [];
  
    //iterate over each element in the array
    for (let i = 0; i < array.length; i++) {
      //apply function to elements
      //if predicate function returns false, add the element to the result array
      if (!func(array[i], i, array)) {
        result.push(array[i]);
      }
    }
  
    //return the result array with elements that did not satisfy the func
    return result;
  }


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
    _.partition = function(array, func) {
    //check input is an array and func is a function
    if (!Array.isArray(array) || typeof predicate !== 'function') {
      return [[], []];
    }
  
    //initialize arrays to hold elements that satisfy and do not satisfy the func
    let truthyArray = [];
    let falsyArray = [];
  
    //iterate over each element in the array
    for (let i = 0; i < array.length; i++) {
      //apply the function to each element
      if (predicate(array[i], i, array)) {
        //if returns truthy, push the element to truthyArray
        truthyArray.push(array[i]);
      } else {
        //if returns falsy, push the element to falsyArray
        falsyArray.push(array[i]);
      }
    }
  
    //return result as an array of two arrays
    return [truthyArray, falsyArray];
  }


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
    _.map = function(collection, iteratee) {
    //initialize an empty array to store results
    let result = [];
  
    //check the collection is an array
    if (Array.isArray(collection)) {
      //iterate over the array
      for (let i = 0; i < collection.length; i++) {
        //apply the iteratee function to each element
        result.push(iteratee(collection[i], i, collection));
      }
    } 
    //check if collection is an object
    else if (typeof collection === 'object' && collection !== null) {
      // Iterate over the object's keys
      for (let key in collection) {
        //chrck the property belongs to the object itself
        if (collection.hasOwnProperty(key)) {
          //apply the iteratee function to each value
          result.push(iteratee(collection[key], key, collection));
        }
      }
    }
  
    //return the result array
    return result;
  }


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
    _.pluck = function(array, property) {
    //check input is an array and property is a string
    if (!Array.isArray(array) || typeof property !== 'string') {
      return [];
    }
  
    //use _.map to create a new array with the property values
    return _.map(array, function(item) {
      //return the value of the specified property for each object
      return item[property];
    });
  }
  
  //define _.map function as required by the pluck implementation
  function map(collection, iteratee) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(iteratee(collection[i], i, collection));
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(iteratee(collection[key], key, collection));
        }
      }
    }
  
    return result;
  }
  

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
    _.every = function(collection, predicate) {
    //check function is provided
    if (typeof predicate === 'function') {
      // Iterate over the collection
      for (let key in collection) {
        //check the property belongs to the collection itself
        if (collection.hasOwnProperty(key)) {
          //call function and check the result
          if (!predicate(collection[key], key, collection)) {
            return false; //returns fals for any element, return false
          }
        }
      }
      return true; //if returns true for all elements, return true
    } else {
      //no function provided, check if all elements are truthy
      for (let key in collection) {
        //check the property belongs to the collection itself
        if (collection.hasOwnProperty(key)) {
          //switch value to boolean and check if it's falsy
          if (!Boolean(collection[key])) {
            return false; //if any element is falsy, return false
          }
        }
      }
      return true; //if elements are truthy, return true
    }
  }

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
    _.some = function(collection, predicate) {
    //check if a function is provided
    if (typeof predicate === 'function') {
      //iterate over the collection
      for (let key in collection) {
        //check the property belongs to the collection itself
        if (collection.hasOwnProperty(key)) {
          //call the function and check the result
          if (predicate(collection[key], key, collection)) {
            return true; // If predicate returns true for any element, return true
          }
        }
      }
      return false; //if returns false for all elements, return false
    } else {
      //no function provided, check if at least one element is truthy
      for (let key in collection) {
        //check the property belongs to the collection itself
        if (collection.hasOwnProperty(key)) {
          //switch value to boolean and check if it's truthy
          if (Boolean(collection[key])) {
            return true; //if any element is truthy, return true
          }
        }
      }
      return false; //if all elements are falsy, return false
    }
  }

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
    _.reduce = function(array, iteratee, seed) {
    if (!Array.isArray(array) || typeof iteratee !== 'function') {
      throw new TypeError('Invalid arguments');
    }
  
    let hasSeed = arguments.length > 2;
    let result;
    let startIndex;
  
    if (hasSeed) {
      result = seed;
      startIndex = 0;
    } else {
      if (array.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      result = array[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < array.length; i++) {
      result = iteratee(result, array[i], i, array);
    }
  
    return result;
  }

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
      throw new TypeError('Target must be a non-null object');
    }
  
    // Iterate over each source object
    for (const source of sources) {
      if (typeof source === 'object' && source !== null) {
        // Copy each property from source to target
        for (const key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = source[key];
          }
        }
      }
    }
  
    return target;
  }
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}