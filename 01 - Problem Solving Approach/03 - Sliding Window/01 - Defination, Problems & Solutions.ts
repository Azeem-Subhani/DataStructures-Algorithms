/*
    Sliding Window
        In this patteren we create a window which can either be array or number.
        Depending on a certain condition, the window either increases or closes.
        Its very useful while keeping track of a subset of data, in array or string.
*/


/*
    Problem 1: Write a function called maxSubArraySum which accepts an array of integers
    and a number called n. The function should calculate the maximum sum of n consecutive
    elements in the array.

    Use Cases:
    maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) it should return 10
    maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) it should return 17
    maxSubArraySum([4, 2, 1, 6], 1) it should return 6
    maxSubArraySum([], 4) it should return null
*/

// Beginner Approach, TIME COMPLEXITY O(n*2)
function naiveMaxSubArraySum(arr: Array<number>, num: number): number | null {
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if( temp > max) {
            max = temp
        }
    }
    return max;
}

// Sliding Window Approach
 function maxSubArraySum(arr: Array<number>, num: number) {
    let maxSum = 0;
    let tempSum = 0;
    
    if(arr.length < num) {
        return null;
    }

    for(let i = 0; i < num; i++) {
        maxSum = maxSum + arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}