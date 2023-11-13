/*
    Frequency Counter Patteren
        In this patteren we count the occurence of value or frequency of values using hashmap,object or map
        The main advantage of this approach is we can avoid nested loops
*/

/*
    Problem 1: Count the number of character in a string
*/

function countCharacters(str) {
    if(str.length === 0) {                      // Handling the basecase
        return false;
    }
    const lookup = {}                           // Creating an object for counting frequencies
    for(let currentValue of str){               // Iterating over the string
        if(lookup[currentValue]) {              // Checking is current value as a key exists in lookup
            lookup[currentValue] += 1
        } else {
            lookup[currentValue] = 1            // If doesn't exists then create it and set it to 1
        }
    }
    return lookup;                              // Return the object in the end
}

/*
    Problem 2: Write a function which accepts two arrays, the function should return true if every value in the
    array has its corresponding value squared in the second array. The Frequency of values must be the same.

    Use Cases:
    same([1,2,3], [1,4,9]) it should return true;
    same([1,2,3], [1,3,9]) it should return false;
    same([1,2,3], [4,9]) it should return false;
    same([1,1,3], [1,1,9]) it should return true;

*/

// Solution without frequency counter
function SameWithNaiveApproach(arr1, arr2) {
    // Checking the base condition
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let val of arr1) {
        let correctIndex = arr2.indexOf(val ** 2); // We're using indexOf, it has O(n) complexity
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1); // Removing the value from array 2
    }
    return true;
}

// Solution with frequency counter
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {                                   // Checking the base case
        return false;
    }
    // Counting the frequency
    let frequecnyCounter1 = {}
    let frequecnyCounter2 = {}
    for(let val of arr1) {
        frequecnyCounter1[val] = (frequecnyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequecnyCounter2[val] = (frequecnyCounter2[val] || 0) + 1;
    }

    for(let key in frequecnyCounter1) {
        // checking is the squared key exists in FC2
        if(!(key ** 2 in frequecnyCounter2)) {
            return false;
        }
        // checking is the value exists
        if(frequecnyCounter2[key ** 2] !== frequecnyCounter1[key]) {
            return false;
        }
    }
    return true;
}

/*
    Problem 3: Given two strings, write a function which checks is the second string is anagram of first word.
    ANAGRAM: It is a word phrase or name, by rearranging we can form another letter. such as cinema, iceman

    Use Cases:
    validAnagram('', '') it should return true;
    validAnagram('aaz', 'azz') it should return false;
    validAnagram('rat', 'car') it should return false;
    validAnagram('cinema', 'iceman') it should return true;

*/
function validAnagram(str1, str2) {
    // cheking the basecase
    if(str1.length !== str2.length) {
        return false;
    }
    // Actuall Implementations
    // Counting the frequency of characters in string 1
    const lookup = {};
    for(let val of str1) {
        lookup[val] ? lookup[val] += 1 : lookup[val] = 1
    }
    // Iterating over the second string
    for(let val of str2) {
        // Checking If value exists in lookup then subtract it by 1 otherwise return false
        if(!lookup[val]) { 
            return false;
        } else {
            lookup[val] -= 1;
        }
    }
    // If controls gets here then it means two strings are anagram
    return true;
}
