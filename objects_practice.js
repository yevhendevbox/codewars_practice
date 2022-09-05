/**
 * Task description: Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise.
     ({ a: 1 }) => true,
     ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 * @param element - element to verify
 * @returns {boolean}
 */

const checkObject = obj => typeof obj === 'object' && !Array.isArray(obj) && !null;

/**
  * Task description: Write a method that returns a deep array like [[key, value]]
  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
  * Task complexity: 1 of 5
  * @param {Object} object - Any object to transform into array
  * @returns {Array} - a deep array
*/

const deepArray = obj => Object.entries(obj);

const deepArray2 = obj => Object.keys(obj).map(el => [el, obj[el]]);

function deepArray3(obj) {
  let result = [];
  for (const key in obj) {
    result = [...result, [key, obj[key]]];
  }
  return result;
}

/**
  * Task description: Write a method that returns new object without provided properties
  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
  * Task complexity: 2 of 5
  * @param {Object} object - Any object
  * @param {?} args - list of properties to remove from object
  * @returns {Object} - New object without listed values
*/

function refactorObj(obj, rm) {
  let result = {};
  for (const key in obj) {
    if (key !== rm) {
      result[key] = obj[key];
    }
  }
  return result;
}

function refactorObj2(obj, ...args) {
  let newObject = {...obj};
  args.forEach(key => delete newObject[key]);
  return newObject;
}


/**
  * Task description: Write a method that makes a shallow check is object empty
  * Expected Result: ({}) => true, ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Empty values: '', null, NaN, undefined
  * Task complexity: 2 of 5
  * @param {Object} object - Object with values of primitive data types
  * @returns {boolean}
*/

function checkObjectIsEmpty(obj) {
  if (!Object.keys(obj).length) return true;
  for (const key in obj) {
    return !obj[key];
  }
}

/**
  * Task description: Write a method that makes a shallow compare of two objects
  * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Task complexity: 2 of 5
  * @param {Object<string | number>} firstObj - Object with values of primitive data types
  * @param {Object<string | number>} secondObj - Object with values of primitive data types
  * @returns {boolean}
*/

function compareObjects(first, second) {
  if (Object.keys(first).length !== Object.keys(second).length) return false;
  for (const key in first) {
    if (first.hasOwnProperty(key) && (first[key] !== second[key])) return false;
  }
  return true;
}

/**
  * Task description: Write a method that invokes an array method on a specific path
  * Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
  * Task complexity: 3 of 5
  * @param {Object} object
  * @param {String} path - path in an object to property
  * @param {String} func - function to invoke
  * @param {Array} [args] - list of args
  * @returns {?}
*/

function invokeMethod(){

};