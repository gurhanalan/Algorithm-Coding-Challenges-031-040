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
