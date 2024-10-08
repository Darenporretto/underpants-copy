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
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value; //return the value unchanged
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
    if (value === null) return "null"; 
    //if null is null
    if (Array.isArray(value)) return "array"; 
    // if array is an array
    return typeof value; 
    //use typeof for other types
};

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
    //if first arg is an array
    if (!Array.isArray(array)) return []; //return empty array if not

    //if number is notthere or not a number return the 1st element
    if (typeof number !== 'number') return array[0];

    //if number is negative, return an empty array
    if (number < 0) return[];

    //if number is greater return entire array
    if (number > array.length) return array;

    //return 1st number in element
    return array.slice(0, number);
};

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
    //if array is first arg
    if (!Array.isArray(array)) return[];

    //if number is not a number return last element
    if (typeof number !== 'number') return array[array.length -1];

    //if number is negative return empty array
    if (number < 0) return [];

    //if number is greater than arrau return whole array
    if (number > array.length) return array;

    //return the last number
    return array.slice(array.length - number);
};

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
    //check if the first arg is an array, return -1 if not an array
    if (!Array.isArray(array)) return -1;

    //loop through array to find thrst occurance of value
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i; //return thr index of if the value is found
        }
    }
    return -1; //return the index if value is found
};

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
    //check if the first argument is an array
    if (!Array.isArray(array)) return false; //return false if not an array

    //use the ternary operator to check for the presence of value
    let found = false; //initialize found variable
    for (let i = 0; i < array.length; i++) {
        found = (array[i] === value) ? true : found; // update found if value is found
    }

    return found; //return true if found, otherwise false
};

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
    //check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection); //call the function for each element
        }
    } 
    //check if collection is an object
    else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                func(collection[key], key, collection); //call the function for each property
            }
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique =function(array) {
    const newArray = []; //initialize new array

    //loop through original array
    for (let i = 0; i < array.length; i++) {
        //use _.indexOf to see if the value exists in newArray
        if (_.indexOf(newArray, array[i]) === -1) {
            newArray.push(array[i]);//add value if not already present
        }
    }
    return newArray; //returns the array of new values
};


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
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
    const resultArray = [];//initoalize array to hold filtered results

    //use _.each to iterate over the arr
    _.each(array, function(element, index, originalArray) {
        //call provided function and check return value
       if (func(element, index, originalArray)) {
        //add element to resultArray if returns true
        resultArray.push(element);
       }
    });
    return resultArray; //return the new array of filtered elements
}

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
    //initialize a new array to hold rejected results
    const resultArray = [];
    //loop through the array
    for (let i = 0; i < array.length; i ++) {
        //call function and check return value
        if(!func(array[i], i, array)) {
            //add element to result array if returns false
            resultArray.push(array[i]);
        }
    }
    return resultArray; //return array of rejected elements
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
    //new arrays to hold speerate truthy and falsy values
    const truthyArray = [];
    const falsyArray = [];

    //loop through array
    for (let i = 0; i < array.length; i++) {
        //call func and store the results
        if (func(array[i], i, array)) {
            //addto thrthy array if return truthy
            truthyArray.push(array[i]);
            } else {
            //add to falsy array if returns falsy
            falsyArray.push(array[i]);
            }
        }
        //rteurn the arrays as a nested array
        return [truthyArray, falsyArray];
    };

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
*   _.map({ a: 1, b: 2, c: 3 }, function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
    const result = []; //create an array to hold the results

    //if collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(func(collection[i], i, collection)); 
            //call the func with element, index, and collection
        }
    } else {
        //else collection is an object
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(func(collection[key], key, collection)); 
                //call the func with value, key, and collection
            }
        }
    }

    return result; //return the new array
};
 
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
_.pluck = function(arrayOfObjects, property) {
    //must use _.map() to iterate over each object in array
    return _.map(arrayOfObjects, function(obj) {
        //return value of property
        return obj[property];
    });
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
_.every = function(collection, func) {
    //create function to checck if truthy
    func = func || ((value) => !!value);
    //i wanted to try and use the double NOT(bang) operator

    //iterate through the collection
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                //return false if falsy
                return false;
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (!func(collection[key], key, collection)) {
                    //return false if falsy
                    return false;
                }
               
            }
        }
    }
    //return true if all conditiond are met
    return true;

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
_.some = function(collection, func) {
    //create function to check if truthy
    func = func || ((value) => !!value);

    //iterate through the collection
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (func(collection[i], i, collection)) {
                //return true if truthy
                return true;
            }
        }
    } else if (typeof collection === 'object' && collection !== null) {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                if (!func(collection[key], key, collection)) {
                    //return true
                    return true;
                }
               
            }
        }
    }
    //return false if all conditiond are met
    return false;
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
_.reduce = function(array, func, seed) {
    let previousResult;
    //determine if seed is provided, use as previousResult
    if (seed !== undefined) {
    previousResult = seed; //assign previous result seed
    for (let i = 0; i < array.length; i++) {
        //reassign previous result to the result invoking the callback func
        previousResult = func(previousResult, array[i], i);
    }
} else {
    previousResult = array[0]; // assign previous result to the first item in array
    for (let i = 1; i < array.length; i++) {
        //reassign the previous result to the result invoking the csllbsck func
        previousResult = func(previousResult, array[i], i);
    }
}

return previousResult;

};

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
_.extend = function(object, ...objects) {
    //iterate through each property object
    for (const properties of objects) {
        //check if properties is an object
        if (properties && typeof properties === 'object') {
            //iterate through the properties
            for (const key in properties) {
                if (properties.hasOwnProperty(key)) {
                    //copy the property to the target object
                    object[key] = properties[key];
                }
            }
        }
    }
    //return the updated target object
    return object;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}