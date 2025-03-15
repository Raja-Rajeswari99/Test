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

//fibonacci series
function fibonacci(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}
console.log(fibonacci(5));

//Second Largest Number
function secondLargest(arr) {
    arr.sort((a, b) => b - a); 
    return arr[1];
}

console.log(secondLargest([10, 20, 4, 45, 99])); 


//Missing Number
function findMissingNumber(arr) {
    let sum = arr.length + 1;
    let total = (sum* (sum + 1)) / 2;  
    let aSum = arr.reduce((sum, num) => sum + num, 0);
    return total - aSum;  
}

console.log(findMissingNumber([1, 2, 4, 5])); 

//Count
function countOccurrences(str) {
    let result = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    
    return result;
}
console.log(countOccurrences("hello")); 


//OutputBased
//question1
//122
// 32
// 02
// 112
// Nan2
// Nan

//Question 2
//True

//Question3
//456

//question 4
//Undefined

//question 8
//number

//question 10
//undefined
//5
