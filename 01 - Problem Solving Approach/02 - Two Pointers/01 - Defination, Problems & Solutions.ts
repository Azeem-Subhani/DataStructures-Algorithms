/*
    Two Pointers
        In this patteren we create pointers that refers to an index or position.
        These pointers can be moved toward the begining, end or middle based on a condition.
        This problem solving patteren works best on sorted arrays or linkedlist.
*/

/*
    Problem 1: Write a function called sum zero, this function should return first pair where sum
    is equal to zero. Returns array including both values that sum to zero or undefined if pair isn't
    found. (SORTED ARRAY)

    Use Cases:
    sumZero([-4,-3,-2,-1,0,1,2,3,5]) it should return [-3, 3];
    sumZero([-2,0,1,3]) it should return undefined;
    sumZero([1,2,3]) it should return undefined;
*/

// Beginner Approach, TIME COMPLEXITY O(n*2)
function NaiveSumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}

// Two Pointers Approach, TIME COMPLEXITY O(n)
function sumZero(arr) {
    let left = 0;                                       // Starting Left index from start
    let right = arr.length -1;                          // Starting right index from last
    while(left < right) {                               // loop over while left is greater than right
        if(arr[left] + arr[right] === 0) {              // If condition matches then terminate
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {        // If sum is greater than zero meaning move right by 1
            right--;
        } else {                                        // If sum is less than zero meaning move left by 1
            left++;
        }
    }
    return undefined;
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,5]));
// console.log(sumZero([-2,0,1,3]))
// console.log(sumZero([1,2,3]))

/*
    Problem 2: Write a function called twoSum, this function should return first pair where sum
    is equal to the goal. Returns array including both indices of values that sum to goal or undefined if pair isn't
    found. (SORTED ARRAY)

    Use Cases:
    twoSum([1,3,10,11,14], 13) it should return [1, 2];
    twoSum([-2,0,1,3],1) it should return [0,3];
    twoSum([1,2,3],9) it should return undefined;
*/

function twoSum(list: Array<number>, goal: number): undefined | Array<number> {
    if(list.length === 0) {
        return undefined;
    }
    let left = 0;                                                       
    let right = list.length;

    while(left < right) {
        if(list[left] + list[right] === goal) {
            return [left, right];
        } else if(list[left] + list[right] > goal) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

/*
    Problem 3: Write a function called countUniqueValues, This function accepts a sorted array, counts the unique values
    inside the array. There can be a negative numbers in the array but it always be sorted.

    Use Cases:
    countUniqueValues([1,1,1,1,1,2]) it should return 2;
    countUniqueValues([-2,0,1,3]) it should return 4;
    countUniqueValues([]) it should return undefined;
*/

function countUniqueValues(list: Array<number>): number {
    let uniqueValues = 0;                                           // Variable to store unique values
    let left = 0;                                                   // Pointer to refer to left
    
    for(let right = left + 1; right < list.length; right++) {       // Starting Right pointer 1 index greater than left
        if(list[left] !== list[right]) {                            // If values at pointer are not eq then move left by 1 and add 1 to unique
            left = left + 1;
            list[left] = list[right];
            uniqueValues += 1;
        }
    }
    return list.length === 0 ? 0 : uniqueValues + 1;                // Return 0 if list is empty otherwise unique values 
}