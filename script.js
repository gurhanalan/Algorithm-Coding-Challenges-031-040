"use strict";

// 31. reverse
/* 
Write a recursive function called reverse which accepts a string and returns a new string in reverse
*/
function reverse(str) {
    if (str.length === 0) return "";

    return str.slice(-1) + reverse(str.slice(0, -1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir
console.log(reverse("awesome"));

// tail recursion
function reverse2(str, revWord = "") {
    if (str.length === 0) return revWord;

    return reverse2(str.slice(0, -1), revWord + str.slice(-1));
}
console.log(reverse2("awesome"));

// /////////////////////////
// 32. isPalindrome
/* 
Write a recursive function called isPalindrome  which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (str.length === 0) return true;

    return str[0] === str.slice(-1) && isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("amanaplanacanalpanama"));

////////////////////////////////
// 33. someRecursive
/* 
Write a recursive function called someRecursive  which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
*/

function someRecursive(arr, callback) {
    if (arr.length === 0) return false;

    return callback(arr.pop()) || someRecursive(arr, callback);
}
const isOdd = (val) => val % 2 !== 0;
// console.log(someRecursive([1, 2, 3, 4], isOdd));

///////////////////////////////////////
// 34. flatten
/* 
Write a recursive function called flatten  which accepts an array of arrays and returns a new array with all values flattened.
*/
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(arr, flat = []) {
    while (typeof arr[0] !== "object" && arr[0]) {
        flat.push(arr.shift());
    }

    if (arr.length === 0) return flat;
    else return flatten([...arr[0], ...arr.slice(1)], flat);
}

// function flatten(arr) {}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(typeof [1]);

// A different solution
function flatten2(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten2(oldArr[i]));
        } else {
            newArr.push(oldArr[i]);
        }
    }
    return newArr;
}

// ////////////////////////////////
// 35. capitalizeFirst
/* 
Write a recursive function called capitalizeFirst . Given an array of strings, capitalize the first letter of each string in the array.
*/
function capitalizeFirst(arr, cap = []) {
    // console.log(cap);
    if (arr.length === 0) {
        return cap;
    } else {
        cap.push(arr[0].toLowerCase()[0].toUpperCase() + arr[0].slice(1));
        return capitalizeFirst(arr.slice(1), cap);
    }

    // add whatever parameters you deem necessary - good luck!
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(["car", "taco", "banana"]));

// ///////////////////////
//36. nestedEvenSum
/* 
Write a recursive function called nestedEvenSum . Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
*/

function nestedEvenSum(obj) {
    let total = 0;
    for (let el in obj) {
        if (typeof obj[el] === "number" && obj[el] % 2 === 0) {
            total += obj[el];
        } else if (typeof obj[el] === "object") {
            total += nestedEvenSum(obj[el]);
        }
    }
    return total;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
        },
    },
};

console.log(nestedEvenSum(obj1));
var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj2));

///////////////////////////////////////////////
//37. capitalizeWords
/* 
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

function capitalizeWords(arr, cap = []) {
    if (arr.length === 0) return cap;
    else {
        cap.push(arr[0].toUpperCase());
        return capitalizeWords(arr.slice(1), cap);
    }
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

///////////////////////////////////////////////////////////////
// 38. stringifyNumbers
/* 
Write a function called stringifyNumbers  which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
*/
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
    for (let el in obj) {
        if (typeof obj[el] === "number") {
            obj[el] += "";
        } else if (typeof obj[el] === "object") {
            obj[el] = stringifyNumbers(obj[el]);
        }
    }
    return obj;
}

// Not changing the input object
function stringifyNumbers2(obj1) {
    const obj = { ...obj1 };
    for (let el in obj) {
        if (typeof obj[el] === "number") {
            obj[el] += "";
        } else if (typeof obj[el] === "object") {
            obj[el] = stringifyNumbers2(obj[el]);
        }
    }
    return obj;
}

// 3rd wat
function stringifyNumbers3(obj) {
    const objNew = {};
    for (let el in obj) {
        if (typeof obj[el] === "number") {
            objNew[el] = obj[el] + "";
        } else if (typeof obj[el] === "object") {
            objNew[el] = stringifyNumbers3(obj[el]);
        } else {
            objNew[el] = obj[el];
        }
    }
    return objNew;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

console.log(stringifyNumbers3(obj));

// /////////////////////////////////////////
//39. collectStrings
/* 
Write a function called collectStrings  which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/
function collectStrings(obj) {
    let total = [];
    for (let el in obj) {
        if (typeof obj[el] === "string") {
            total.push(obj[el]);
        } else if (typeof obj[el] === "object") {
            total.push(...collectStrings(obj[el]));
        }
    }
    return total;
}

const obj5 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

console.log(collectStrings(obj5));

// ////////////////////////////////
// 40. Simple nearest prime
/* 
In this challenge, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127
We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.
*/

function isPrime(num) {
    // check for 1 and 0
    if (num <= 1) return false;

    // make an array of prime numbers till the num
    const arrPrimes = [2];
    let i = 2;
    //  decreasing the complexity of the algorithm from O(n) to O(sqrt(n))
    while (i <= Math.sqrt(num)) {
        if (num % i === 0) return false;

        i++;
    }
    return true;
}

function solve1(num) {
    let leftPrimeNum = num,
        rightPrimeNum = num;

    while (!isPrime(leftPrimeNum)) {
        leftPrimeNum--;
    }
    if (leftPrimeNum === num) return num;

    while (!isPrime(rightPrimeNum)) {
        rightPrimeNum++;
    }
    return num - leftPrimeNum <= rightPrimeNum - num
        ? leftPrimeNum
        : rightPrimeNum;
}

// a better answer for the performance
function solve2(num) {
    if (isPrime(num)) return num;

    for (let i = 1; i < num; i++) {
        if (isPrime(num - i)) return num - i;
        if (isPrime(num + i)) return num + i;
    }
}

// console.log(solve2(14));
