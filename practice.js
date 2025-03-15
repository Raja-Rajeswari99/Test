//ReverseString
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 

//Factorial
function factorial(n) {
    if (n === 0) return 1; 
    return n * factorial(n - 1); 
}
console.log(factorial(5)); 


