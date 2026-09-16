// Problem Solving with AI (Claude Code + JavaScript)

// Q1. JavaScript Coding Practice - Solutions

// 1. Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (Number(celsius) * 9 / 5) + 32;
}
console.log('Celsius 0 -> Fahrenheit:', celsiusToFahrenheit(0)); // 32

// 2. Find the Factorial of a Number
function factorial(n) {
    n = Number(n);
    if (!Number.isInteger(n) || n < 0) return null;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}
console.log('5! =', factorial(5)); // 120

// 3. Check for Palindrome
function isPalindrome(input) {
    const s = String(input).toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
}
console.log('racecar is palindrome:', isPalindrome('racecar')); // true

// 4. Sum of Array Elements
function sumArray(arr) {
    return arr.reduce((acc, v) => acc + Number(v), 0);
}
const nums = ['1', '2', '3', '4'];
console.log('Sum:', sumArray(nums)); // 10

// 5. FizzBuzz (1..15)
function fizzBuzz(n = 15) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}
fizzBuzz(15);